// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8tgKERrpVPlloT9_PDr_KkDN84OGT5HE",
  authDomain: "dall-e-2-f9245.firebaseapp.com",
  projectId: "dall-e-2-f9245",
  storageBucket: "dall-e-2-f9245.firebasestorage.app",
  messagingSenderId: "337060238165",
  appId: "1:337060238165:web:10a53a2f177eda0066d5dc",
  measurementId: "G-THWJ8JZEPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };