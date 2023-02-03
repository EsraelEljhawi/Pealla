import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged ,updatePassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
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

  const app = initializeApp(firebaseConfig);

const form = document.querySelector(".signin");
//if (email!='paellamanager1@gmail.com') {
  //const info = document.querySelector(".info");
const auth = getAuth(app);

const login = document.getElementById('login')
// const email = document.getElementById("email").value;
// const password = document.getElementById("password").value;
//const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

login.addEventListener('click',(e)=>{
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var m1 = document.getElementById("emailmessage");
  var m2 = document.getElementById("passwordmessage");
  var m3 = document.getElementById("emailformmessage");
  var m4 = document.getElementById('passwordwrongmessage');
  var m5 = document.getElementById('emailwrongmessage');
  
  if(email == "" && password == "")
  {
  m1.style["display"] = "block";
  m2.style["display"] = "block";
  return false;
  }
  if(email == "")
  {
  m1.style["display"] = "block";
  m2.style["display"] = "none";
  return false;
  }
  // if(res.test(String(email).toLowerCase())==false){
  //   m1.style["display"] = "none";
  //   m3.style["display"] = "block";
  //   return false;
  // }
  // if(res.test(String(email).toLowerCase())==true){
  //   m1.style["display"] = "none";
  //   m3.style["display"] = "none";
  //   return false;
  //   }
  if(password == "")
  {
  m1.style["display"] = "none";
  m2.style["display"] = "block";
  return false;
  }
  else
  {
  m1.style["display"] = "none";
  m2.style["display"] = "none";
  m3.style["display"] = "none";
  m4.style["display"] = "none";
  m5.style["display"] = "none";
  if(email=='paellamanager1@gmail.com') {
     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       console.log(`Successfully signed in!`);            
        // redirecting to app homepage
        window.location.href = "./dashboard.html";
     })
     .catch((error) => {
            // Handle Errors here.
           // alert(error); 
           m4.style["display"] = "block";
           document.getElementById('error_message').innerHTML = error;
        });
    // reset form
      }
       else m5.style["display"] = "block";
      // document.getElementById('passwordmessage').innerHTML = "البريد الالكتروني غير صحيح";
      } // else ends here
});
  
//} // for if

//  const signout=document.getElementById('signout');
//  signout.addEventListener('click',)


// function resetPass(){

//   var email = document.getElementById("emailX").value;
//   var oldpass = document.getElementById("oldpass").value;
//   var newpass = document.getElementById("newpass").value;
  
 
//     firebase.auth().signInWithEmailAndPassword(email, oldpass)
//         {
//            // console.log(`Successfully signed in!`);            
//             alert("success");
//          //   var user = firebase.auth().currentUser;
//          //   alert(user); 
 
//  /*           user.updatePassword(newpass).then(function() {
//               // Update successful.
//               alert("done")
//             }).catch(function(error) {
//               // An error happened.
//               alert(error);
//             }); */
//         }
  
// }




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
//  var reset = document.getElementById("reset");
//  reset.onclick=function(){
//   const auth = getAuth();
// var passsword=document.getElementById("newpass").value;
// const user = auth.currentUser;
// const newPassword = passsword;

// updatePassword(user, newPassword).then(() => {
//   // Update successful.
//   console.log('success')
// }).catch((error) => {
//   // An error ocurred
//   // ...
//   console.log(error)
// });
//  }