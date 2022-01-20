import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
  measurementId: "G-G7KJBP4MEN",
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("error created user", error.message);
    }
  }
  return userRef;
};

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const SignInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(name, email, profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// var provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({
//   prompt: "select_account",
// });

// //works for signInWithPopup and signInWithRedirect

// export const signInWithPopup = () => auth.signInWithPopup(provider);
// export const signInWithRedirect = () => auth.signInWithRedirect(provider);
// export default firebase;
