// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8-aSZOrY0qgAxo5oYBO9ApjzmvX83U4w",
    authDomain: "coach-devs.firebaseapp.com",
    projectId: "coach-devs",
    storageBucket: "coach-devs.appspot.com",
    messagingSenderId: "953511229318",
    appId: "1:953511229318:web:938484aa309306e9dd1e07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;