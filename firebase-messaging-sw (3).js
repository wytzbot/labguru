// Handles push notifications while the app is closed / in the background.
// Must live at the site root (same scope as index.html).
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDiwHX3WZsri83Nsv6khD56yas7KkTzA3c",
  authDomain: "labguru-af7f8.firebaseapp.com",
  projectId: "labguru-af7f8",
  storageBucket: "labguru-af7f8.firebasestorage.app",
  messagingSenderId: "337649838006",
  appId: "1:337649838006:web:f300b8a145a25174e9c317"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || 'LabGuru';
  const body = (payload.notification && payload.notification.body) || 'New update in LabGuru.';
  self.registration.showNotification(title, {
    body,
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    data: payload.data || {},
    tag: (payload.data && payload.data.tag) || 'labguru-general'
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || './index.html';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const client of list) {
        if ('focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(target);
    })
  );
});
