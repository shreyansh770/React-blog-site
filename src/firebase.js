import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyDKRQlBj6338KAO3uFTpu4O2qEdhVfLKQA",
    authDomain: "blog-cbf6b.firebaseapp.com",
    projectId: "blog-cbf6b",
    storageBucket: "blog-cbf6b.appspot.com",
    messagingSenderId: "730684544955",
    appId: "1:730684544955:web:103b85b949f1f9af46969e"
  };
  
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore()

  export const auth = firebase.auth()

  let provider = new firebase.auth.GoogleAuthProvider();

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase