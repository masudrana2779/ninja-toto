// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCjzXvxRCSMqvTWgdx2aEGEh0Z6Wk38yCE",
    authDomain: "mr-login-606cb.firebaseapp.com",
    projectId: "mr-login-606cb",
    storageBucket: "mr-login-606cb.appspot.com",
    messagingSenderId: "183407908880",
    appId: "1:183407908880:web:6c590bb88ebed0b517d295"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth;

export function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
}