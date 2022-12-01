import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA0MWZNl8QC13K_GcqnbVPvLlR-c0aUdJI",
  authDomain: "fir-login-bd02c.firebaseapp.com",
  projectId: "fir-login-bd02c",
  storageBucket: "fir-login-bd02c.appspot.com",
  messagingSenderId: "604904291509",
  appId: "1:604904291509:web:56426da061c333b86212fc",
  measurementId: "G-PGLB8YDV4P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();






export {app,db} 