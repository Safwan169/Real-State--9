// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNwj6C8X5GL0oCA6KQpdkgeMxMvmPWpUI",
  authDomain: "residential-11da6.firebaseapp.com",
  projectId: "residential-11da6",
  storageBucket: "residential-11da6.appspot.com",
  messagingSenderId: "978157353974",
  appId: "1:978157353974:web:6df2e3e2be17f76ea4a5d7",
  measurementId: "G-JF99ENZX1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth(app);
