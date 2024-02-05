// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU-KdXDWQTqSfi5x9BEYoNoaGbM8eVfLw",
  authDomain: "netfixgpt-a0f40.firebaseapp.com",
  projectId: "netfixgpt-a0f40",
  storageBucket: "netfixgpt-a0f40.appspot.com",
  messagingSenderId: "619850852861",
  appId: "1:619850852861:web:86d794dbfc7108fced9194",
  measurementId: "G-9RBDPYGCWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
export {auth};