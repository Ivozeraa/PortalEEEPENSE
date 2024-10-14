import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjE9rzuft6_CjZI8GQyhFmQh3ctI49IR8",
  authDomain: "portal-eps.firebaseapp.com",
  projectId: "portal-eps",
  storageBucket: "portal-eps.appspot.com",
  messagingSenderId: "229579055468",
  appId: "1:229579055468:web:a686ad6ca5d93cc4e91349"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };