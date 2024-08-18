// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWtsdH_nAvXgCd37RKcJwt_U0ypKwBeSA",
  authDomain: "flashcard-saas-76c34.firebaseapp.com",
  projectId: "flashcard-saas-76c34",
  storageBucket: "flashcard-saas-76c34.appspot.com",
  messagingSenderId: "761624944550",
  appId: "1:761624944550:web:4086a5f7440bbd9a10b967",
  measurementId: "G-HS7EQL977G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;