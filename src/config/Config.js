// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8chEKVl9tDa4jtpybsAXFlHqmXpzz6iM",
  authDomain: "fir-tuto-e9bc6.firebaseapp.com",
  projectId: "fir-tuto-e9bc6",
  storageBucket: "fir-tuto-e9bc6.appspot.com",
  messagingSenderId: "603437680177",
  appId: "1:603437680177:web:a58ce00774b97fda20b710",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
