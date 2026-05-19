importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCo6aiDqr34bAQzMbSdV91W0-p_n6UDiIo",
  authDomain: "furniquoteapp-dev.firebaseapp.com",
  databaseURL: "https://furniquoteapp-dev-default-rtdb.firebaseio.com",
  projectId: "furniquoteapp-dev",
  storageBucket: "furniquoteapp-dev.firebasestorage.app",
  messagingSenderId: "756530430220",
  appId: "1:756530430220:web:09366dc8560b92fb870929",
  measurementId: "G-0FPQ5DFF66"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'icons/Icon-192.png'
  };

  const isApplePlatform = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
  if (!isApplePlatform && self.registration && self.registration.showNotification) {
    self.registration.showNotification(notificationTitle, notificationOptions);
  } else if (isApplePlatform) {
    console.log('[firebase-messaging-sw.js] Notifications skipped on Apple platform');
  } else {
    console.log('[firebase-messaging-sw.js] showNotification not supported');
  }
});
