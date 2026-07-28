/**
 * POST /api/paystack-webhook
 * Set this URL in Paystack Dashboard → Settings → API Keys & Webhooks.
 * Source of truth for recurring billing: charge.success (renewal),
 * subscription.disable / invoice.payment_failed (revoke access).
 *
 * IMPORTANT: Vercel parses JSON bodies by default, but we need the RAW
 * body bytes to verify Paystack's HMAC signature correctly. We disable
 * the default body parser below and read+parse the raw body ourselves.
 */
const crypto = require('crypto');
const { admin, db } = require('./_lib/firebaseAdmin');

const PREMIUM_DURATION_MS = 60 * 24 * 60 * 60 * 1000; // 2 months

module.exports.config = {
  api: { bodyParser: false },
};

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

async function findUserByEmail(email) {
  if (!email) return null;
  const snap = await db.collection('users').where('email', '==', email).limit(1).get();
  return snap.empty ? null : snap.docs[0].ref;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const rawBody = await readRawBody(req);
  const signature = req.headers['x-paystack-signature'];
  const hash = crypto.createHmac('sha512', process.env.PAYSTACK_SECRET).update(rawBody).digest('hex');
  if (hash !== signature) {
    console.warn('Invalid Paystack webhook signature');
    return res.status(401).send('Invalid signature');
  }

  const event = JSON.parse(rawBody);
  try {
    switch (event.event) {
      case 'charge.success': {
        const email = event.data.customer && event.data.customer.email;
        const uid = event.data.metadata && event.data.metadata.uid;
        const userRef = uid ? db.collection('users').doc(uid) : await findUserByEmail(email);
        if (userRef) {
          const expiry = Date.now() + PREMIUM_DURATION_MS;
          await userRef.set({
            isPremium: true,
            premiumExpiry: expiry,
            lastPaymentReference: event.data.reference,
            lastPaymentAt: admin.firestore.FieldValue.serverTimestamp(),
          }, { merge: true });
        }
        break;
      }
      case 'subscription.disable':
      case 'invoice.payment_failed': {
        const email = event.data.customer && event.data.customer.email;
        const userRef = await findUserByEmail(email);
        if (userRef) await userRef.set({ isPremium: false }, { merge: true });
        break;
      }
      default:
        break;
    }
    res.status(200).send('ok');
  } catch (err) {
    console.error('paystack-webhook error', err);
    res.status(500).send('error');
  }
};
