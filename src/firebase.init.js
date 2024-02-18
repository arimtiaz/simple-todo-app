import { initializeApp } from "firebase/app";
import { browserSessionPersistence, getAuth, setPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvfOqPDxLKlv4IbhuNJQRsmzQ_KmlE8Ek",
  authDomain: "simple-todo-app-b5983.firebaseapp.com",
  projectId: "simple-todo-app-b5983",
  storageBucket: "simple-todo-app-b5983.appspot.com",
  messagingSenderId: "905914945356",
  appId: "G-9X2337279Q"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Persistent authentication enabled");
  })
  .catch((error) => {
    console.error("Error enabling persistent authentication:", error);
  });

export { auth};
