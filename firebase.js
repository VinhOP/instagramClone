// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3YyxpyH7KDU83m2EWxFwEiK0GiG5KJXw",
  authDomain: "vop-instagram-clone.firebaseapp.com",
  projectId: "vop-instagram-clone",
  storageBucket: "vop-instagram-clone.appspot.com",
  messagingSenderId: "628394006103",
  appId: "1:628394006103:web:dfb0f1945251e38e6af512"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};