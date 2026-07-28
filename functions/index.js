/**
 * LabGuru Cloud Functions
 * ------------------------------------------------------------
 * Deploy with: firebase deploy --only functions
 *
 * Required config (do NOT put these in the client app):
 *   firebase functions:config:set paystack.secret="sk_live_xxx"
 *
 * Or, with newer Node runtimes, use a .env file in /functions:
 *   PAYSTACK_SECRET=sk_live_xxx
 * ------------------------------------------------------------
 */
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fetch = require('node-fetch');
const crypto = require('crypto');

admin.initializeApp();
const db = admin.firestore();

const PAYSTACK_SECRET = functions.config().paystack ? functions.config().paystack.secret : process.env.PAYSTACK_SECRET;
const PREMIUM_DURATION_MS = 60 * 24 * 60 * 60 * 1000; // 2 months

/* =========================================================
 * 1) verifyPayment — called by the client right after Paystack's
 *    popup callback fires, to confirm the charge really succeeded
 *    before granting access (never trust the client-side callback alone).
 * ========================================================= */
exports.verifyPayment = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST') return res.status(405).json({ status: false, message: 'Method not allowed' });

  const { reference, uid } = req.body || {};
  if (!reference || !uid) return res.status(400).json({ status: false, message: 'Missing reference or uid' });

  try {
    const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` }
    });
    const data = await verifyRes.json();

    if (data.status && data.data && data.data.status === 'success') {
      const expiry = Date.now() + PREMIUM_DURATION_MS;
      await db.collection('users').doc(uid).set({
        isPremium: true,
        premiumExpiry: expiry,
        paystackCustomerCode: data.data.customer ? data.data.customer.customer_code : null,
        paystackSubscriptionCode: data.data.plan_object ? data.data.plan_object.plan_code : null,
        lastPaymentReference: reference,
        lastPaymentAt: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      return res.json({ status: true, premiumExpiry: expiry });
    }
    return res.json({ status: false, message: 'Payment not successful' });
  } catch (err) {
    console.error('verifyPayment error', err);
    return res.status(500).json({ status: false, message: 'Verification error' });
  }
});

/* =========================================================
 * 2) paystackWebhook — the real source of truth for RECURRING billing.
 *    Point this URL at Paystack Dashboard > Settings > API Keys & Webhooks.
 *    Handles: charge.success (renewal), subscription.disable,
 *    invoice.payment_failed (grace period / revoke access).
 * ========================================================= */
exports.paystackWebhook = functions.https.onRequest(async (req, res) => {
  const signature = req.headers['x-paystack-signature'];
  const hash = crypto.createHmac('sha512', PAYSTACK_SECRET).update(JSON.stringify(req.body)).digest('hex');
  if (hash !== signature) {
    console.warn('Invalid Paystack webhook signature');
    return res.status(401).send('Invalid signature');
  }

  const event = req.body;
  try {
    switch (event.event) {
      case 'charge.success': {
        // Fires on the first payment AND every subsequent auto-renewal charge.
        const email = event.data.customer && event.data.customer.email;
        const uid = event.data.metadata && event.data.metadata.uid;
        const userRef = uid ? db.collection('users').doc(uid) : await findUserByEmail(email);
        if (userRef) {
          const expiry = Date.now() + PREMIUM_DURATION_MS;
          await userRef.set({
            isPremium: true,
            premiumExpiry: expiry,
            lastPaymentReference: event.data.reference,
            lastPaymentAt: admin.firestore.FieldValue.serverTimestamp()
          }, { merge: true });
        }
        break;
      }
      case 'subscription.disable':
      case 'invoice.payment_failed': {
        const email = event.data.customer && event.data.customer.email;
        const userRef = await findUserByEmail(email);
        if (userRef) {
          await userRef.set({ isPremium: false }, { merge: true });
        }
        break;
      }
      default:
        break; // ignore other event types
    }
    res.status(200).send('ok');
  } catch (err) {
    console.error('paystackWebhook error', err);
    res.status(500).send('error');
  }
});

async function findUserByEmail(email) {
  if (!email) return null;
  const snap = await db.collection('users').where('email', '==', email).limit(1).get();
  return snap.empty ? null : snap.docs[0].ref;
}

/* =========================================================
 * 3) sendStudyReminders — scheduled function (runs every 3 days).
 *    Nudges users who have notifications enabled to come study a
 *    unit they haven't finished yet.
 *    Requires the Blaze (pay-as-you-go) plan, since Cloud Scheduler
 *    needs it — the free tier of Cloud Scheduler jobs still applies.
 * ========================================================= */
exports.sendStudyReminders = functions.pubsub.schedule('every 72 hours').onRun(async () => {
  const usersSnap = await db.collection('users')
    .where('notificationsEnabled', '==', true)
    .get();

  const UNITS = ['Hematology', 'Clinical Chemistry', 'Medical Microbiology', 'Immunology', 'Histopathology', 'Parasitology', 'Blood Banking'];

  const sends = usersSnap.docs.map(async (doc) => {
    const user = doc.data();
    if (!user.fcmToken) return;
    const pick = UNITS[Math.floor(Math.random() * UNITS.length)];
    try {
      await admin.messaging().send({
        token: user.fcmToken,
        notification: {
          title: '🧪 Time to study!',
          body: `Come review ${pick} on LabGuru — a quick 10-minute session keeps it fresh.`
        },
        data: { tag: 'study-reminder', unit: pick }
      });
    } catch (err) {
      console.warn('Reminder failed for', doc.id, err.message);
      // Clean up dead tokens so future sends don't keep failing on them.
      if (err.code === 'messaging/registration-token-not-registered') {
        await doc.ref.set({ fcmToken: null, notificationsEnabled: false }, { merge: true });
      }
    }
  });
  await Promise.all(sends);
  return null;
});

/* =========================================================
 * 4) notifyNewAnalysis — fires automatically when you add a new
 *    document to the `content_updates` Firestore collection, e.g.:
 *      db.collection('content_updates').add({
 *        title: 'New: Coagulation Panel',
 *        body: 'A new Hematology analysis just dropped — check it out!'
 *      });
 *    Broadcasts to every user who has notifications enabled.
 * ========================================================= */
exports.notifyNewAnalysis = functions.firestore
  .document('content_updates/{updateId}')
  .onCreate(async (snap) => {
    const update = snap.data();
    const usersSnap = await db.collection('users').where('notificationsEnabled', '==', true).get();
    const tokens = usersSnap.docs.map(d => d.data().fcmToken).filter(Boolean);
    if (!tokens.length) return null;

    const chunks = [];
    for (let i = 0; i < tokens.length; i += 500) chunks.push(tokens.slice(i, i + 500)); // FCM multicast limit

    await Promise.all(chunks.map(chunk => admin.messaging().sendEachForMulticast({
      tokens: chunk,
      notification: {
        title: update.title || '🆕 New content on LabGuru',
        body: update.body || 'A new analysis was just added.'
      },
      data: { tag: 'new-content' }
    })));
    return null;
  });
