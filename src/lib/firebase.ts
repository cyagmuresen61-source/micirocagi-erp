import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACu0eNfvRe3A-6MzdVZ0Q_meGNgcTjc8s",
  authDomain: "micirocagi.firebaseapp.com",
  projectId: "micirocagi",
  storageBucket: "micirocagi.firebasestorage.app",
  messagingSenderId: "1048148861168",
  appId: "1:1048148861168:web:9c725508bcb361bb382235",
  measurementId: "G-0N76CQEK68",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
