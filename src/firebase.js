// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyCi7Qk0YRBKFCq085dqD8ilZEf9I6JDGFo",
//   authDomain: "e-clone-ab1cc.firebaseapp.com",
//   projectId: "e-clone-ab1cc",
//   storageBucket: "e-clone-ab1cc.appspot.com",
//   messagingSenderId: "659495831612",
//   appId: "1:659495831612:web:00926b5f49410184389b39",
//   measurementId: "G-QM1XTD3K0B",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
