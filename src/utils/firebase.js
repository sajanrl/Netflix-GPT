// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgmPK9SajDLQYr8mDpEbo4DhdMbE7stGk",
  authDomain: "netflix-gpt-c5299.firebaseapp.com",
  projectId: "netflix-gpt-c5299",
  storageBucket: "netflix-gpt-c5299.appspot.com",
  messagingSenderId: "241363408898",
  appId: "1:241363408898:web:4f9474e7175e4d6708ef1b",
  measurementId: "G-C5X68HT9TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);

export const auth = getAuth();
