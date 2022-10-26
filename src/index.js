// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {getAuth,onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = initializeApp

({ apiKey: "AIzaSyATWDc-8oMJT9YCRiLsZFW96IklhrzklRA",

  authDomain: "pealla-499cf.firebaseapp.com",

  databaseURL: "https://pealla-499cf-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "pealla-499cf",

  storageBucket: "pealla-499cf.appspot.com",

  messagingSenderId: "480176817532",

  appId: "1:480176817532:web:f0f572d00136f6854810f9",

  measurementId: "G-3VDKWK043R"

});


// Initialize Firebase

const db = getFirestore(firebaseApp);
const auth=getAuth(firebaseApp);

onAuthStateChanged(auth,user=>{
  if (user != null) {
    console.log('logging in');
  } else {
    console.log('no user');
  }
});


  
