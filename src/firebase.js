// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJW7SUhh2ieYw8xA_9xSzhWeKBLRF4pcc",
  authDomain: "exercise-tutorial.firebaseapp.com",
  projectId: "exercise-tutorial",
  storageBucket: "exercise-tutorial.appspot.com",
  messagingSenderId: "920363820803",
  appId: "1:920363820803:web:b2852e86b6a45504c2b36",
  measurementId: "G-MPVFXJ2V59",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
