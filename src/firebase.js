// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAycLtoIBwvOH3CxRu8y56Z9P25rrk8PRU",
  authDomain: "netflix-react-3a68e.firebaseapp.com",
  projectId: "netflix-react-3a68e",
  storageBucket: "netflix-react-3a68e.appspot.com",
  messagingSenderId: "276111456039",
  appId: "1:276111456039:web:81e4b0561fbe572b105b02",
  measurementId: "G-BZQ4XZ9HJN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
