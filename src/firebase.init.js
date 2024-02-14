import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import {getDatabase} from 'firebase/database'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvfOqPDxLKlv4IbhuNJQRsmzQ_KmlE8Ek",
  authDomain: "simple-todo-app-b5983.firebaseapp.com",
  projectId: "simple-todo-app-b5983",
  storageBucket: "simple-todo-app-b5983.appspot.com",
  messagingSenderId: "905914945356",
  appId: "G-9X2337279Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

const auth = getAuth(app);

export { auth, db };
