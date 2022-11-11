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

firebase.initializeApp(firebaseConfig);

const form = document.querySelector(".signin");
//const info = document.querySelector(".info");

const user_email = document.getElementById("email");
const user_password = document.getElementById("password");

form.addEventListener("submit", event => {
    event.preventDefault();

    let email = user_email.value;
    let password = user_password.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log(`Successfully signed in!`);            
        // redirecting to app homepage
        window.location.href = "./dashboard.html";

        })
        .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            let html = `<p><b>Ooops!</b> Could not sign you in!</p>
                        <ol>
                            <li>You <b>forgot your password</b>; contact the admin or</li>
                            <li>Your email <b>is not registered</b> to use this App.</li>
                        </ol>
            `;
            
          /*  info.innerHTML = html;
            setTimeout(() => {
                info.innerHTML = ``;
            }, 8000); */
        });

    // reset form
    form.reset();
});




/*
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const firebase = require('firebase/app');

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
  const app = firebase.intializeApp(firebaseConfig);

  /*firebase.auth().onAuthStateChanged((user) => {
    var notLoggedIn = document.getElementById('not-logged-in');
    var loggedIn = document.getElementById('logged-in');
    if (user) {
      loggedIn.style.display = 'block';
      notLoggedIn.style.display = 'none';
    } else {
        loggedIn.style.display = 'none';
        notLoggedIn.style.display = 'block';
    }
  });*/


/*
  function login(event) {

    event.preventDefault();
    var email = document.getElementById('email').value;
    var password= document.getElementById('passsword').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    window.location="dashboard.html";
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    //var errorCode = error.code;
    //var errorMessage = error.message;
    console.log('error signning in,', error.message);
    alert(error.message);
  }).then(function(user){
    if(user){
        alert('welcome back');
    }
  })
  }


 function logout() {

 } */