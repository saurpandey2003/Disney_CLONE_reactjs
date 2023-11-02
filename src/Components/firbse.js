


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDKkIsYkT3VVOf_ecylGGB-0nZaBZ5v6iE",
    authDomain: "disneyplus-c5d01.firebaseapp.com",
    projectId: "disneyplus-c5d01",
    storageBucket: "disneyplus-c5d01.appspot.com",
    messagingSenderId: "910564237268",
    appId: "1:910564237268:web:a0c2a5c742fb43c8c08041",
    measurementId: "G-YS3G56RQ97"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
