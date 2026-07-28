/**
 * POST /api/notify-new-analysis
 * Body: { title, body, secret }
 *
 * Vercel has no Firestore-trigger equivalent, so this replaces
 * `notifyNewAnalysis`: call this endpoint yourself whenever you publish
 * new content, e.g.:
 *
 *   fetch('https://YOUR-APP.vercel.app/api/notify-new-analysis', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({
 *       title: 'New: Coagulation Panel',
 *       body: 'A new Hematology analysis just dropped — check it out!',
 *       secret: 'YOUR_CRON_SECRET'
 *     })
 *   });
 *
 * Reuses CRON_SECRET as a simple shared secret so only you can trigger it.
 */
const { db, messaging } = require('./_lib/firebaseAdmin');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { title, body, secret } = req.body || {};
  if (secret !== process.env.CRON_SECRET) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const usersSnap = await db.collection('users').where('notificationsEnabled', '==', true).get();
    const tokens = usersSnap.docs.map((d) => d.data().fcmToken).filter(Boolean);
    if (!tokens.length) return res.status(200).json({ ok: true, sent: 0 });

    const chunks = [];
    for (let i = 0; i < tokens.length; i += 500) chunks.push(tokens.slice(i, i + 500)); // FCM multicast limit

    await Promise.all(chunks.map((chunk) => messaging.sendEachForMulticast({
      tokens: chunk,
      notification: {
        title: title || '🆕 New content on LabGuru',
        body: body || 'A new analysis was just added.',
      },
      data: { tag: 'new-content' },
    })));

    res.status(200).json({ ok: true, sent: tokens.length });
  } catch (err) {
    console.error('notify-new-analysis error', err);
    res.status(500).json({ ok: false, error: err.message });
  }
};
