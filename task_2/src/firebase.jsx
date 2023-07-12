/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseconfig";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

async function registerWithEmailAndPassword(email, password) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const token = user.getIdToken;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
    return token;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

async function loginWithEmailAndPassword(email, password) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const token = user.getIdToken;
    return token;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

export { registerWithEmailAndPassword, loginWithEmailAndPassword };
