import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth,updatePassword, reauthenticateWithCredential,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
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
  const reset=document.getElementById('reset');
  const pass=document.getElementById('newpass');
  var m1 = document.getElementById('emptymessage');
  var m2 = document.getElementById('shortpassmessage');
  //var m3 = document.getElementById('no');
  reset.onclick=function(){
    
    var pass=document.getElementById('newpass').value;
    var email = document.getElementById("emailX").value;
    var password = document.getElementById("oldpass").value;
    if(email == "" || pass == "" || password == ""){
      m1.style["display"] = "block";
      return false;
    }
    if(pass != "" && String(pass).length < 8){
      m1.style["display"] = "none";
      m2.style["display"] = "block";
      return false;
    }
    else {
      m1.style["display"] = "none";
      m2.style["display"] = "none";
    const auth = getAuth(app);
       signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
        const newPassword = pass.value;
        const user = auth.currentUser; 
        console.log(user)
        updatePassword(user, newPassword).then(() => {
          document.getElementById('pup').classList.add('opa');
          setTimeout(function(){
            
            document.getElementById('pup').classList.remove('opa');
            window.location.reload()
            },3000);
          // Update successful.
        }).catch((error) => {
          // An error ocurred
          // ...
          alert(error)
        });
         // Signed in 
       })
       .catch((error) => {
              // Handle Errors here.
             // alert(error); 
            //  document.getElementById('error_message').innerHTML = error;
            //   let errorCode = error.code;
            //   let errorMessage = error.message; 
              /*let html = `<p><b>Ooops!</b> Could not sign you in!</p>
                          <ol>
                              <li>You <b>forgot your password</b>; contact the admin or</li>
                              <li>Your email <b>is not registered</b> to use this App.</li>
                          </ol>`;
              
              info.innerHTML = html;
              setTimeout(() => {
                  info.innerHTML = ``;
              }, 8000); */
              //m3.style["display"] = "block";
              if(error == "FirebaseError: Firebase: Error (auth/wrong-password)."){
              document.getElementById("no").innerHTML = "كلمة المرور الحالية غير صحيحة";
            } else if(error == "FirebaseError: Firebase: Error (auth/user-not-found)."){
              document.getElementById("noemail").innerHTML = "البريد الالكتروني غير صحيح";
            }
          });
    //
        } // else endds here
  }