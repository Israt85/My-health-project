// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa1dQo6ofJGZpJqIxrsiqsdB9BVC4xasI",
  authDomain: "my-healthfair-project.firebaseapp.com",
  projectId: "my-healthfair-project",
  storageBucket: "my-healthfair-project.appspot.com",
  messagingSenderId: "832544982975",
  appId: "1:832544982975:web:0cf6e84e6ce891e960830a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;