// Konfigurasi dari proyek Firebase Anda
const firebaseConfig = {
  apiKey: "KODE_API_ANDA_DI_SINI",
  authDomain: "rizqana-xxxxx.firebaseapp.com",
  projectId: "rizqana-xxxxx",
  storageBucket: "rizqana-xxxxx.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefghij"
};

// Menyalakan Firebase dan Database (Firestore)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
