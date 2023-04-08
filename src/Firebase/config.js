import { initializeApp } from "firebase/app";
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAW42eRWnaaJRY0JRysfVDJ5Eq6hQJEoyg",
  authDomain: "fir-project-2c4c0.firebaseapp.com",
  databaseURL: "https://fir-project-2c4c0-default-rtdb.firebaseio.com",
  projectId: "fir-project-2c4c0",
  storageBucket: "fir-project-2c4c0.appspot.com",
  messagingSenderId: "591628393084",
  appId: "1:591628393084:web:629e8fccc8a9e56fd547f9",
  measurementId: "G-LNQTHYKJ3H"
};

const firebase = initializeApp(firebaseConfig);

export { firebase };