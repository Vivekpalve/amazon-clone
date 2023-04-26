import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  // Your Firebase config object here
  apiKey: "AIzaSyCi7Qk0YRBKFCq085dqD8ilZEf9I6JDGFo",
  authDomain: "e-clone-ab1cc.firebaseapp.com",
  projectId: "e-clone-ab1cc",
  storageBucket: "e-clone-ab1cc.appspot.com",
  messagingSenderId: "659495831612",
  appId: "1:659495831612:web:00926b5f49410184389b39",
  measurementId: "G-QM1XTD3K0B",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth(); //auth is authentication

export { db, auth };
