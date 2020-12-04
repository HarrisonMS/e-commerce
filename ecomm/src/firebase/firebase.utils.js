import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDJdowMp_-arULNNzmv7CrsYKAF3Ex3BC0",
  authDomain: "ecom-765a4.firebaseapp.com",
  projectId: "ecom-765a4",
  storageBucket: "ecom-765a4.appspot.com",
  messagingSenderId: "1052381528832",
  appId: "1:1052381528832:web:87f6ac65a6b8bebdade9e5",
  measurementId: "G-LF19N0RJBP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
