// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwAnEDMm42ZNTUwt-iT8TnrfZOba-KsM0",
    authDomain: "pokedex-8b61c.firebaseapp.com",
    projectId: "pokedex-8b61c",
    storageBucket: "pokedex-8b61c.appspot.com",
    messagingSenderId: "987419287427",
    appId: "1:987419287427:web:27890b9442b5f3d038a0b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}