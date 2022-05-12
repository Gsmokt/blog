
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDeZ_xv4yQSzgheqiAKBbHRLmV8srG1Jh4",
  authDomain: "blog-7c4df.firebaseapp.com",
  projectId: "blog-7c4df",
  storageBucket: "blog-7c4df.appspot.com",
  messagingSenderId: "273139738127",
  appId: "1:273139738127:web:fdb8d5b29ea3bd9413a57a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
