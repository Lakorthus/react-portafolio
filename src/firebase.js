import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBrg5fbWvJ2JTjZm5J0b6SiDiYKYs5XH14",
  authDomain: "react-portfolio-dashboar-d9a22.firebaseapp.com",
  projectId: "react-portfolio-dashboar-d9a22",
  storageBucket: "react-portfolio-dashboar-d9a22.appspot.com",
  messagingSenderId: "732112064236",
  appId: "1:732112064236:web:273dacb83e8685843b5fc9",
  measurementId: "G-9S3VR0X672"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);