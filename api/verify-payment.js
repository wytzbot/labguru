/**
 * POST /api/verify-payment
 * Body: { transaction_id, tx_ref, uid }
 * Called by the client right after Flutterwave's checkout callback fires.
 * Confirms the charge with Flutterwave's server before granting premium —
 * never trust the client-side callback alone (a user could fake a
 * "successful" callback in devtools without this check).
 */
const { admin, db } = require('./_lib/firebaseAdmin');
const { sendToExternalIds } = require('./_lib/onesignal');

const PREMIUM_DURATION_MS = 60 * 24 * 60 * 60 * 1000; // 2 months
const PREMIUM_DURATION_DAYS = PREMIUM_DURATION_MS / 86400000;
const EXPECTED_CURRENCY = 'USD';
const EXPECTED_AMOUNT = 2.5;

// Best-effort push confirming a successful payment via OneSignal, targeted
// at this user's Firebase uid (tagged as their OneSignal external_id — see
// setOneSignalExternalId in index.html). A missing subscription should
// never block granting premium access.
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

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ status: false, message: 'Method not allowed' });

  const { transaction_id, tx_ref, uid } = req.body || {};
  if (!transaction_id || !uid) return res.status(400).json({ status: false, message: 'Missing transaction_id or uid' });

  try {
    const verifyRes = await fetch(`https://api.flutterwave.com/v3/transactions/${encodeURIComponent(transaction_id)}/verify`, {
      headers: { Authorization: `Bearer ${process.env.FLW_SECRET_KEY}` },
    });
    const data = await verifyRes.json();
    const tx = data.data;

    // Check status, currency, amount, AND that tx_ref matches what we
    // expect — this stops someone from replaying a valid-but-unrelated
    // transaction ID to unlock premium for free.
    const isValid = data.status === 'success' && tx &&
      tx.status === 'successful' &&
      tx.currency === EXPECTED_CURRENCY &&
      Number(tx.amount) >= EXPECTED_AMOUNT &&
      (!tx_ref || tx.tx_ref === tx_ref);

    if (isValid) {
      const expiry = Date.now() + PREMIUM_DURATION_MS;
      const userRef = db.collection('users').doc(uid);
      await userRef.set({
        isPremium: true,
        premiumExpiry: expiry,
        flutterwaveCustomerEmail: tx.customer ? tx.customer.email : null,
        lastPaymentReference: tx.tx_ref,
        lastPaymentAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
      await sendPaymentConfirmation(uid);
      return res.status(200).json({ status: true, premiumExpiry: expiry });
    }
    return res.status(200).json({ status: false, message: 'Payment not successful' });
  } catch (err) {
    console.error('verify-payment error', err);
    return res.status(500).json({ status: false, message: 'Verification error' });
  }
};
