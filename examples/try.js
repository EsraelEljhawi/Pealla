import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";



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
  
  form.addEventListener('click',()=>{
    const loginEmailPassword=async()=>{
      const email=document.getElementById('email').value;
      const password=document.getElementById('password').value;
      const auth = getAuth(app);
  
    
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(error.message);
    });
  }
  })
  