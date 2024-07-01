// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbWVNqVMGIYzv9LC54zy672EnDPx_aPE8",
  authDomain: "mg-store-99ea7.firebaseapp.com",
  projectId: "mg-store-99ea7",
  storageBucket: "mg-store-99ea7.appspot.com",
  messagingSenderId: "543775133504",
  appId: "1:543775133504:web:effdaa02ffaaff4639b4a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
