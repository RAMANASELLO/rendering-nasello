// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgL8hHfQolNCSCNTVrk1-4re5lsUAw1UM",
  authDomain: "coderhouse-nasello.firebaseapp.com",
  projectId: "coderhouse-nasello",
  storageBucket: "coderhouse-nasello.appspot.com",
  messagingSenderId: "400498961905",
  appId: "1:400498961905:web:520658cd386605e4df6850"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)

