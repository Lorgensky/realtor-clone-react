// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpWUqKx2j4mgc8t5yA8uFagDno13WGfSE",
  authDomain: "realtor-clone-react-f3aba.firebaseapp.com",
  projectId: "realtor-clone-react-f3aba",
  storageBucket: "realtor-clone-react-f3aba.appspot.com",
  messagingSenderId: "354163386370",
  appId: "1:354163386370:web:f152181034a7081ad79f1b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()