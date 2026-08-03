/**
 * POST /api/flutterwave-webhook
 * Set this URL in Flutterwave Dashboard → Settings → Webhooks, and set the
 * same secret string as both FLW_SECRET_HASH here and the "Secret Hash"
 * field in that dashboard screen (this is NOT your API secret key — it's
 * a separate shared string Flutterwave echoes back in the `verif-hash`
 * header so we can confirm a webhook call actually came from them).
 *
 * We still re-verify the transaction against Flutterwave's API (not just
 * trust the webhook payload) before granting premium — belt and suspenders.
 */
const { admin, db } = require('./_lib/firebaseAdmin');
const { sendToExternalIds } = require('./_lib/onesignal');

const PREMIUM_DURATION_MS = 60 * 24 * 60 * 60 * 1000; // 2 months
const PREMIUM_DURATION_DAYS = PREMIUM_DURATION_MS / 86400000;
const EXPECTED_CURRENCY = 'USD';
const EXPECTED_AMOUNT = 2.5;

async function sendPaymentConfirmation(uid) {
  try {
    await sendToExternalIds([uid], {
      title: '✅ Payment Confirmed',
      body: `Your LabGuru Premium payment went through — you're all set for the next ${PREMIUM_DURATION_DAYS} days. Enjoy full access!`,
      data: { tag: 'payment-confirmation' },
    });
  } catch (err) {
    console.warn('sendPaymentConfirmation failed:', err.message);
  }
}

async function findUserByEmail(email) {
  if (!email) return null;
  const snap = await db.collection('users').where('email', '==', email).limit(1).get();
  return snap.empty ? null : snap.docs[0].ref;
}

// tx_ref values we generate client-side look like "labguru-<uid>-<timestamp>"
function uidFromTxRef(txRef) {
  if (!txRef || !txRef.startsWith('labguru-')) return null;
  const rest = txRef.slice('labguru-'.length);
  const lastDash = rest.lastIndexOf('-');
  return lastDash === -1 ? null : rest.slice(0, lastDash);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const signature = req.headers['verif-hash'];
  if (!signature || signature !== process.env.FLW_SECRET_HASH) {
    console.warn('Invalid Flutterwave webhook signature');
    return res.status(401).send('Invalid signature');
  }

  const event = req.body;
  try {
    if (event.event === 'charge.completed' && event.data && event.data.status === 'successful') {
      const txId = event.data.id;

      // Re-verify directly with Flutterwave's API rather than trusting the
      // webhook body alone — this is the same check verify-payment.js does.
      const verifyRes = await fetch(`https://api.flutterwave.com/v3/transactions/${txId}/verify`, {
        headers: { Authorization: `Bearer ${process.env.FLW_SECRET_KEY}` },
      });
      const verifyData = await verifyRes.json();
      const tx = verifyData.data;

      const isValid = verifyData.status === 'success' && tx &&
        tx.status === 'successful' &&
        tx.currency === EXPECTED_CURRENCY &&
        Number(tx.amount) >= EXPECTED_AMOUNT;

      if (isValid) {
        const uid = uidFromTxRef(tx.tx_ref);
        const userRef = uid ? db.collection('users').doc(uid) : await findUserByEmail(tx.customer && tx.customer.email);
        if (userRef) {
          const expiry = Date.now() + PREMIUM_DURATION_MS;
          await userRef.set({
            isPremium: true,
            premiumExpiry: expiry,
            lastPaymentReference: tx.tx_ref,
            lastPaymentAt: admin.firestore.FieldValue.serverTimestamp(),
          }, { merge: true });
          await sendPaymentConfirmation(userRef.id);
        }
      }
    }
    res.status(200).send('ok');
  } catch (err) {
    console.error('flutterwave-webhook error', err);
    res.status(500).send('error');
  }
};
