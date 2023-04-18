// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1j0LUknr6IPctKAnLsVkVUIvyIXHj41Q",
    authDomain: "ema-john-with-firebase-a-7d689.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-7d689",
    storageBucket: "ema-john-with-firebase-a-7d689.appspot.com",
    messagingSenderId: "785561578485",
    appId: "1:785561578485:web:3b23d6e338412e5f518ebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;