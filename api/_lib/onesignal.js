/**
 * Shared OneSignal REST API helper.
 *
 * Requires two Vercel env vars:
 *   ONESIGNAL_APP_ID        (same App ID you connect in Median App Studio →
 *                            Plugins → OneSignal)
 *   ONESIGNAL_REST_API_KEY  (OneSignal Dashboard → Settings → Keys & IDs —
 *                            this one is secret, server-side only, never
 *                            put it in index.html/data.js)
 *
 * Targets users by "external_id" — the Firebase uid we tag each device
 * with via the Median JS Bridge (see setOneSignalExternalId in index.html).
 * That's what lets us push to ONE specific signed-in user (e.g. a payment
 * confirmation) instead of only broadcasting to everyone.
 */
async function sendToExternalIds(externalIds, { title, body, data }) {
  const ids = externalIds.filter(Boolean);
  if (!ids.length) return { ok: true, sent: 0 };

  // OneSignal caps aliases per request; chunk defensively.
  const chunks = [];
  for (let i = 0; i < ids.length; i += 2000) chunks.push(ids.slice(i, i + 2000));

  const results = await Promise.all(chunks.map((chunk) =>
    fetch('https://api.onesignal.com/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Key ${process.env.ONESIGNAL_REST_API_KEY}`,
      },
      body: JSON.stringify({
        app_id: process.env.ONESIGNAL_APP_ID,
        target_channel: 'push',
        include_aliases: { external_id: chunk },
        headings: { en: title },
        contents: { en: body },
        data: data || {},
      }),
    }).then((r) => r.json())
  ));

  return { ok: true, sent: ids.length, results };
}

// Broadcast to every subscribed user (used for "new content dropped"
// announcements where we don't need per-user targeting).
async function sendToAllSubscribed({ title, body, data }) {
  const res = await fetch('https://api.onesignal.com/notifications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Key ${process.env.ONESIGNAL_REST_API_KEY}`,
    },
    body: JSON.stringify({
      app_id: process.env.ONESIGNAL_APP_ID,
      target_channel: 'push',
      included_segments: ['Subscribed Users'],
      headings: { en: title },
      contents: { en: body },
      data: data || {},
    }),
  });
  return res.json();
}

module.exports = { sendToExternalIds, sendToAllSubscribed };
