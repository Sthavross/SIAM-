// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";

        
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB9hY1Uj5SoeBoTSOb8pczPM2tYRWDIXg",
  authDomain: "siam-52a7a.firebaseapp.com",
  projectId: "siam-52a7a",
  storageBucket: "siam-52a7a.appspot.com",
  messagingSenderId: "71361580738",
  appId: "1:71361580738:web:c2f9d8a93007fae5bd355b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);