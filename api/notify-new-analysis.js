/**
 * POST /api/notify-new-analysis
 * Body: { title, body, secret }
 *
 * Call this endpoint yourself whenever you publish new content, e.g.:
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
 * Broadcasts via OneSignal to every subscribed device (see ./_lib/onesignal.js).
 */
const { sendToAllSubscribed } = require('./_lib/onesignal');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { title, body, secret } = req.body || {};
  if (secret !== process.env.CRON_SECRET) return res.status(401).json({ error: 'Unauthorized' });

  try {
    await sendToAllSubscribed({
      title: title || '🆕 New content on LabGuru',
      body: body || 'A new analysis was just added.',
      data: { tag: 'new-content' },
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('notify-new-analysis error', err);
    res.status(500).json({ ok: false, error: err.message });
  }
};
