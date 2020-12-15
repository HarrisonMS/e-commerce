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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // used to add collections into firebase
  // const collectionRef = firestore.collection("users");

  const snapShot = await userRef.get();
  // used to add collections into firebase
  // const collectionSnapShot = await collectionRef.get();
  // console.log("collection", {
  //   collection: collectionSnapShot.docs.map((doc) => doc.data()),
  // });

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

// used to add collections into firebase

// set add collection in else block on componentDidMount
// addCollectionAndDocuments(
//   "collections",
//   collections.map(({ title, items }) => ({ title, items }))
// );
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
// import {
//   auth,
//   createUserProfileDocument,
//   addCollectionAndDocuments,
// } from "./firebase/firebase.utils";

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   collections: selectCollectionsForPreview,
// });

// code used in app.js to pull collections with shop selector and looping through to add correct items
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
