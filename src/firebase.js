// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOvHQHwU5wlWKwO9y34zSI_VGLHAUQ4ZA",
  authDomain: "ws2022.firebaseapp.com",
  projectId: "ws2022",
  storageBucket: "ws2022.appspot.com",
  messagingSenderId: "990771262876",
  appId: "1:990771262876:web:3a3375eafcd959950a4459",
  measurementId: "G-WSEK5GNBPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAuth(app);
getFirestore(app);
getAnalytics(app);
