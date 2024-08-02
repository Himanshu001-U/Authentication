// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbNkoZSV_qrHF9Fc62PuVgmYwwIiyjF5M",
  authDomain: "fir-react-5df6d.firebaseapp.com",
  projectId: "fir-react-5df6d",
  storageBucket: "fir-react-5df6d.appspot.com",
  messagingSenderId: "1016779782728",
  appId: "1:1016779782728:web:91602dafb9405af292767d",
  measurementId: "G-WRZ9GEB5RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db};
