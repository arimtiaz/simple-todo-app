// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvfOqPDxLKlv4IbhuNJQRsmzQ_KmlE8Ek",
  authDomain: "simple-todo-app-b5983.firebaseapp.com",
  projectId: "simple-todo-app-b5983",
  storageBucket: "simple-todo-app-b5983.appspot.com",
  messagingSenderId: "905914945356",
  appId: "G-9X2337279Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app) ;