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

// ~150-word welcome message sent via FCM the first time a new user's
// device token is saved (see sendWelcomeOnTokenSaved below).
const WELCOME_MESSAGE =
  "Welcome to LabGuru, your Medical Laboratory Science companion! We built this app to help you master hematology, clinical chemistry, microbiology, immunology, histopathology, parasitology, and blood banking, one analysis at a time. Every topic breaks real MLS procedures into simple, exam-ready steps: principles, methodology, sources of error, and normal ranges, all in one place. Start with your 5 free analyses today, or go Premium anytime to unlock the full course outline, the unit converter, and unlimited access whenever you need it. Try the Practice Q&A section to test what you've learned as you go, and keep the Normal Ranges reference close for quick lookups during clinicals or exam review. Since you turned on notifications, we'll nudge you to revisit a unit every few days and let you know the moment new content is added. Thanks for joining LabGuru, happy studying, and good luck on your journey to becoming a skilled Medical Laboratory Scientist.";

// Sends a push confirming a successful payment. Best-effort: a missing or
// dead token should never block granting/renewing premium access.
async function sendPaymentConfirmation(userRef, days) {
  try {
    const doc = await userRef.get();
    const token = doc.exists && doc.data().fcmToken;
    if (!token) return;
    await admin.messaging().send({
      token,
      notification: {
        title: '✅ Payment Confirmed',
        body: `Your LabGuru Premium payment went through — you're all set for the next ${days} days. Enjoy full access!`
      },
      data: { tag: 'payment-confirmation' }
    });
  } catch (err) {
    console.warn('sendPaymentConfirmation failed:', err.message);
  }
}

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
      const userRef = db.collection('users').doc(uid);
      await userRef.set({
        isPremium: true,
        premiumExpiry: expiry,
        paystackCustomerCode: data.data.customer ? data.data.customer.customer_code : null,
        paystackSubscriptionCode: data.data.plan_object ? data.data.plan_object.plan_code : null,
        lastPaymentReference: reference,
        lastPaymentAt: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      await sendPaymentConfirmation(userRef, PREMIUM_DURATION_MS / 86400000);
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
          await sendPaymentConfirmation(userRef, PREMIUM_DURATION_MS / 86400000);
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
 * 2b) onUserCreate — fires once per new sign-up (Firebase Auth, not
 *     Firestore), so it always catches every new account regardless of
 *     when/if the client happens to write to Firestore. We can't send
 *     the welcome push yet (no device token exists until the user
 *     enables notifications), so we just flag the account as new;
 *     sendWelcomeOnTokenSaved below does the actual send.
 * ========================================================= */
exports.onUserCreate = functions.auth.user().onCreate(async (user) => {
  await db.collection('users').doc(user.uid).set({
    email: user.email || null,
    welcomePending: true,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
});

/* =========================================================
 * 2c) sendWelcomeOnTokenSaved — fires whenever a user document is
 *     updated. The moment a new user's fcmToken is saved for the first
 *     time (i.e. they just enabled notifications), send the one-time
 *     welcome message via FCM and clear the pending flag so it's never
 *     sent twice.
 * ========================================================= */
exports.sendWelcomeOnTokenSaved = functions.firestore
  .document('users/{userId}')
  .onUpdate(async (change) => {
    const before = change.before.data() || {};
    const after = change.after.data() || {};
    const gotTokenForFirstTime = !before.fcmToken && !!after.fcmToken;
    if (!after.welcomePending || !gotTokenForFirstTime) return null;

    try {
      await admin.messaging().send({
        token: after.fcmToken,
        notification: { title: '🧪 Welcome to LabGuru!', body: WELCOME_MESSAGE },
        data: { tag: 'welcome' }
      });
    } catch (err) {
      console.warn('Welcome push failed for', change.after.id, err.message);
    }
    return change.after.ref.set({ welcomePending: false }, { merge: true });
  });

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
