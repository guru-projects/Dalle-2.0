// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "dall-e-2-f9245",
  storageBucket: "dall-e-2-f9245.firebasestorage.app",
  messagingSenderId: "337060238165",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-THWJ8JZEPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };