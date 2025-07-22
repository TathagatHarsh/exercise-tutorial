// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJW7SUhh2ieYw8xA_9xSzhWeKBLRF4pcc",
  authDomain: "exercise-tutorial.firebaseapp.com",
  projectId: "exercise-tutorial",
  storageBucket: "exercise-tutorial.firebasestorage.app",
  messagingSenderId: "920363820803",
  appId: "1:920363820803:web:b2852e868b6a45504c2b36",
  measurementId: "G-MPVFXJ2V59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
