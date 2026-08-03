/**
 * GET /api/send-study-reminders
 * Triggered by Vercel Cron (see vercel.json) — runs DAILY, since Vercel's
 * Hobby plan only supports once-a-day cron minimum. To keep the actual
 * "every 3 days" cadence, this checks a `meta/reminders` Firestore doc
 * and only sends if 3+ days have passed since the last send; otherwise
 * it exits immediately (2 out of every 3 invocations are a no-op).
 *
 * Sends via OneSignal (see ./_lib/onesignal.js) rather than Firebase
 * Cloud Messaging — required for push to actually reach users once the
 * app is wrapped as a Median APK, which uses OneSignal's native SDK
 * under the hood rather than the web Push API.
 *
 * Vercel calls this with an "Authorization: Bearer $CRON_SECRET" header
 * automatically when invoked by the Cron scheduler — we check that so
 * randoms can't hit this URL and spam your users.
 */
const { db } = require('./_lib/firebaseAdmin');
const { sendToExternalIds } = require('./_lib/onesignal');

const UNITS = ['Hematology', 'Clinical Chemistry', 'Medical Microbiology', 'Immunology', 'Histopathology', 'Parasitology', 'Blood Banking'];
const MIN_INTERVAL_MS = 3 * 24 * 60 * 60 * 1000; // 3 days

module.exports = async (req, res) => {
  const auth = req.headers.authorization;
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const trackerRef = db.collection('meta').doc('reminders');
    const trackerSnap = await trackerRef.get();
    const lastSentAt = trackerSnap.exists ? trackerSnap.data().lastSentAt : 0;

    if (Date.now() - lastSentAt < MIN_INTERVAL_MS) {
      return res.status(200).json({ ok: true, skipped: true, reason: 'not due yet' });
    }

    const usersSnap = await db.collection('users').where('notificationsEnabled', '==', true).get();
    const uids = usersSnap.docs.map((d) => d.id);
    const pick = UNITS[Math.floor(Math.random() * UNITS.length)];

    const result = await sendToExternalIds(uids, {
      title: '🧪 Time to study!',
      body: `Come review ${pick} on LabGuru — a quick 10-minute session keeps it fresh.`,
      data: { tag: 'study-reminder', unit: pick },
    });

    await trackerRef.set({ lastSentAt: Date.now() }, { merge: true });
    res.status(200).json({ ok: true, sent: true, count: result.sent });
  } catch (err) {
    console.error('send-study-reminders error', err);
    res.status(500).json({ ok: false, error: err.message });
  }
};
