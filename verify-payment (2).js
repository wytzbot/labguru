/**
 * POST /api/verify-payment
 * Body: { reference, uid }
 * Called by the client right after Paystack's popup callback fires.
 * Confirms the charge with Paystack's server before granting premium —
 * never trust the client-side callback alone.
 */
const { admin, db, messaging } = require('./_lib/firebaseAdmin');

const PREMIUM_DURATION_MS = 60 * 24 * 60 * 60 * 1000; // 2 months
const PREMIUM_DURATION_DAYS = PREMIUM_DURATION_MS / 86400000;

// Best-effort push confirming a successful payment. A missing or dead
// token should never block granting premium access.
async function sendPaymentConfirmation(userRef) {
  try {
    const doc = await userRef.get();
    const token = doc.exists && doc.data().fcmToken;
    if (!token) return;
    await messaging.send({
      token,
      notification: {
        title: '✅ Payment Confirmed',
        body: `Your LabGuru Premium payment went through — you're all set for the next ${PREMIUM_DURATION_DAYS} days. Enjoy full access!`
      },
      data: { tag: 'payment-confirmation' }
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

  const { reference, uid } = req.body || {};
  if (!reference || !uid) return res.status(400).json({ status: false, message: 'Missing reference or uid' });

  try {
    const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET}` },
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
        lastPaymentAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
      await sendPaymentConfirmation(userRef);
      return res.status(200).json({ status: true, premiumExpiry: expiry });
    }
    return res.status(200).json({ status: false, message: 'Payment not successful' });
  } catch (err) {
    console.error('verify-payment error', err);
    return res.status(500).json({ status: false, message: 'Verification error' });
  }
};
