import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4v9ChK-g-Uhm5qsF8oV3hg7jOsvJJfjY",
  authDomain: "expense-tracker-3b7a1.firebaseapp.com",
  projectId: "expense-tracker-3b7a1",
  storageBucket: "expense-tracker-3b7a1.firebasestorage.app",
  messagingSenderId: "1094582931226",
  appId: "1:1094582931226:web:a72948eafd46d652f4e6a3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);