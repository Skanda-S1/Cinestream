import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDGryml4Qkl4wPorgnW25-7QpgO8nYKOlM",
  authDomain: "react-cinestream.firebaseapp.com",
  projectId: "react-cinestream",
  storageBucket: "react-cinestream.appspot.com",
  messagingSenderId: "725686361962",
  appId: "1:725686361962:web:789182f6852ac2bbb9cf13",
  measurementId: "G-F6PF45LX2M"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
