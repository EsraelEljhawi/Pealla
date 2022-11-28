
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged ,updatePassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyATWDc-8oMJT9YCRiLsZFW96IklhrzklRA",

  authDomain: "pealla-499cf.firebaseapp.com",

  databaseURL: "https://pealla-499cf-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "pealla-499cf",

  storageBucket: "pealla-499cf.appspot.com",

  messagingSenderId: "480176817532",

  appId: "1:480176817532:web:f0f572d00136f6854810f9",

  measurementId: "G-3VDKWK043R"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const signin = document.getElementById('submit')

login.addEventListener('click',(e)=>{
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  

     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;


        alert('User loged in!');
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;

       alert(errorMessage);
 });

});

// const user = auth.currentUser;
// onAuthStateChanged(auth, (user) => {
//  if (user) {
//    // User is signed in, see docs for a list of available properties
//    // https://firebase.google.com/docs/reference/js/firebase.User
//    const uid = user.uid;
//    //bla bla bla
//    // ...
//  } else {
//    // User is signed out
//    // ...
//    //bla bla bla
//  }
// });




