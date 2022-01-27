import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzMqPHaKodVagUbFCE823EniwgPNs5LSs",
  authDomain: "sneakers-shop-3886b.firebaseapp.com",
  projectId: "sneakers-shop-3886b",
  storageBucket: "sneakers-shop-3886b.appspot.com",
  messagingSenderId: "998288646985",
  appId: "1:998288646985:web:d2a08a90f4ed461becf098",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = firebase.firestore();
