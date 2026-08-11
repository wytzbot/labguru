/**
 * Shared Flutterwave webhook for LabGuru + WYNET.
 * Register ONLY this URL in Flutterwave:
 * https://labguru-five.vercel.app/api/flutterwave-webhook
 */
const { admin, db } = require('./_lib/firebaseAdmin');
const { sendToExternalIds } = require('./_lib/onesignal');

const LABGURU_EXPECTED_CURRENCY = 'USD';
const LABGURU_EXPECTED_AMOUNT = 2.5;
const WYNET_MONTHLY = Number(process.env.WYNET_MONTHLY_AMOUNT || 3.5);
const WYNET_YEARLY = Number(process.env.WYNET_YEARLY_AMOUNT || 30);

async function findUserByEmail(email) {
  if (!email) return null;
  const snap = await db.collection('users').where('email', '==', email).limit(1).get();
  return snap.empty ? null : snap.docs[0].ref;
}

async function sendPaymentConfirmation(uid) {
  try {
    await sendToExternalIds([uid], {
      title: '✅ Payment Confirmed',
      body: 'Your LabGuru Premium payment went through — your access is active.',
      data: { tag: 'payment-confirmation' },
    });
  } catch (err) { console.warn('sendPaymentConfirmation failed:', err.message); }
}

function labGuruUidFromTxRef(txRef) {
  if (!txRef || !txRef.startsWith('labguru-')) return null;
  const rest = txRef.slice('labguru-'.length);
  const lastDash = rest.lastIndexOf('-');
  return lastDash === -1 ? null : rest.slice(0, lastDash);
}

function productFrom(tx) {
  const meta = tx?.meta || {};
  const product = String(meta.product || '').toUpperCase();
  if (product === 'WYNET_PRO' || String(tx?.tx_ref || '').startsWith('wynet-')) return 'WYNET';
  if (String(tx?.tx_ref || '').startsWith('labguru-')) return 'LABGURU';
  return null;
}

async function alreadyProcessed(transactionId) {
  if (!transactionId) return false;
  const ref = db.collection('flutterwaveWebhookEvents').doc(String(transactionId));
  return db.runTransaction(async t => {
    const snap = await t.get(ref);
    if (snap.exists) return true;
    t.create(ref, { transactionId: String(transactionId), createdAt: admin.firestore.FieldValue.serverTimestamp() });
    return false;
  });
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');
  const signature = req.headers['verif-hash'];
  if (!signature || signature !== process.env.FLW_SECRET_HASH) return res.status(401).send('Invalid signature');

  try {
    const event = req.body || {};
    if (event.event !== 'charge.completed' || event.data?.status !== 'successful') return res.status(200).send('ok');

    const txId = event.data.id;
    const verifyRes = await fetch(`https://api.flutterwave.com/v3/transactions/${encodeURIComponent(txId)}/verify`, {
      headers: { Authorization: `Bearer ${process.env.FLW_SECRET_KEY}` },
    });
    const verifyData = await verifyRes.json();
    const tx = verifyData.data;
    if (verifyData.status !== 'success' || !tx || tx.status !== 'successful') return res.status(200).send('ok');

    const product = productFrom(tx);
    if (!product) return res.status(200).send('ok');
    if (await alreadyProcessed(tx.id)) return res.status(200).send('ok');

    if (product === 'WYNET') {
      const ref = String(tx.tx_ref || '');
      const plan = String(tx.meta?.plan || (ref.includes('-yearly-') ? 'yearly' : 'monthly')) === 'yearly' ? 'yearly' : 'monthly';
      const expectedAmount = plan === 'yearly' ? WYNET_YEARLY : WYNET_MONTHLY;
      if (tx.currency !== (process.env.FLW_CURRENCY || 'USD') || Number(tx.amount) < expectedAmount) return res.status(200).send('ok');
      const email = String(tx.customer?.email || tx.meta?.email || '').trim().toLowerCase();
      if (!email) return res.status(200).send('ok');
      const days = plan === 'yearly' ? 365 : 31;
      const expiresAt = Date.now() + days * 86400000;
      await db.collection('wynetSubscriptions').doc(email).set({ product: 'WYNET_PRO', email, plan, expiresAt, transactionId: String(tx.id), txRef: ref, updatedAt: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });
      return res.status(200).send('ok');
    }

    // Existing LabGuru behavior preserved.
    const isValid = tx.currency === LABGURU_EXPECTED_CURRENCY && Number(tx.amount) >= LABGURU_EXPECTED_AMOUNT;
    if (!isValid) return res.status(200).send('ok');
    const uid = labGuruUidFromTxRef(tx.tx_ref);
    const userRef = uid ? db.collection('users').doc(uid) : await findUserByEmail(tx.customer?.email);
    if (userRef) {
      const premiumExpiry = Date.now() + 60 * 24 * 60 * 60 * 1000;
      await userRef.set({ isPremium: true, premiumExpiry, lastPaymentReference: tx.tx_ref, lastPaymentAt: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });
      await sendPaymentConfirmation(userRef.id);
    }
    return res.status(200).send('ok');
  } catch (err) {
    console.error('shared flutterwave-webhook error', err);
    return res.status(500).send('error');
  }
};
