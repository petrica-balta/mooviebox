// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA4A4zzvP4d00CfBDZPXAB9Qu7bWInl-a8",
    authDomain: "mooviebox-83fb8.firebaseapp.com",
    projectId: "mooviebox-83fb8",
    storageBucket: "mooviebox-83fb8.firebasestorage.app",
    messagingSenderId: "802595205463",
    appId: "1:802595205463:web:08652c35702dd1d6328e12",
    measurementId: "G-D8MMZBD3WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);