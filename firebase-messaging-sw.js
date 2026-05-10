importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
// NOTE: You will need to replace this config with your actual project config
// if you want background notifications to work on Web.
firebase.initializeApp({
  apiKey: "AIzaSyDZZtbJ0GkeE3gBe75YF6zUxmACTXYeusQ",
  authDomain: "tushar-portfolio-34a21.firebaseapp.com",
  databaseURL: "https://tushar-portfolio-34a21.firebaseio.com",
  projectId: "tushar-portfolio-34a21",
  storageBucket: "tushar-portfolio-34a21.firebasestorage.app",
  messagingSenderId: "82609577726",
  appId: "1:82609577726:web:f8cdb39a5b4b2df5544faf",
  measurementId: "G-3QP9M04V22",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});
