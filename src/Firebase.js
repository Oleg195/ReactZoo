import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0MWZNl8QC13K_GcqnbVPvLlR-c0aUdJI",
  authDomain: "fir-login-bd02c.firebaseapp.com",
  projectId: "fir-login-bd02c",
  storageBucket: "fir-login-bd02c.appspot.com",
  messagingSenderId: "604904291509",
  appId: "1:604904291509:web:56426da061c333b86212fc",
  measurementId: "G-PGLB8YDV4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();






export {app,db} 