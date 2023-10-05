// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2TYMofiyUDJBh1p3Ag9j1hSPQaBj9fpM",
  authDomain: "moda-app-a166b.firebaseapp.com",
  projectId: "moda-app-a166b",
  storageBucket: "moda-app-a166b.appspot.com",
  messagingSenderId: "272204266994",
  appId: "1:272204266994:web:b40fcc08af6454a6827f6b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
