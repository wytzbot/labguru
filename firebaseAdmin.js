/**
 * Shared Firebase Admin initializer for Vercel serverless functions.
 *
 * Required Vercel env vars (Project Settings → Environment Variables):
 *   FIREBASE_PROJECT_ID
 *   FIREBASE_CLIENT_EMAIL
 *   FIREBASE_PRIVATE_KEY     (paste with real newlines; we un-escape \n below)
 *   FLW_SECRET_KEY           (Flutterwave secret API key, starts FLWSECK_)
 *   FLW_SECRET_HASH          (any random string YOU generate — set the same
 *                             string in Flutterwave Dashboard → Settings →
 *                             Webhooks → "Secret Hash")
 *   ONESIGNAL_APP_ID         (same App ID connected in Median App Studio →
 *                             Plugins → OneSignal — used here so the backend
 *                             can send targeted/programmatic pushes via the
 *                             OneSignal REST API, see ./onesignal.js)
 *   ONESIGNAL_REST_API_KEY   (OneSignal Dashboard → Settings → Keys & IDs —
 *                             secret, server-side only)
 *   CRON_SECRET              (any random string you generate yourself)
 *
 * Get the first three from Firebase Console → Project Settings → Service
 * Accounts → Generate new private key (downloads a JSON file with these
 * exact fields: project_id, client_email, private_key).
 */
const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      // Vercel env vars store literal "\n" — convert back to real newlines.
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();
const messaging = admin.messaging();

module.exports = { admin, db, messaging };
