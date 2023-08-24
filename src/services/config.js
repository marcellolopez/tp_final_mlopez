// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoPibQoCxgpJuKmA9U_gPIWW1PD-rd_QI",
  authDomain: "mi-tienda-coder.firebaseapp.com",
  projectId: "mi-tienda-coder",
  storageBucket: "mi-tienda-coder.appspot.com",
  messagingSenderId: "2471862563",
  appId: "1:2471862563:web:27c675df5ad396445d2c96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);