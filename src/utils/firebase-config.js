// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMOErUx7T9BcjaGceUSXpdLEppV79OmI0",
  authDomain: "react-netflix-clone-a8b8b.firebaseapp.com",
  projectId: "react-netflix-clone-a8b8b",
  storageBucket: "react-netflix-clone-a8b8b.appspot.com",
  messagingSenderId: "678956770370",
  appId: "1:678956770370:web:209f1556fa86ebf9e439db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);