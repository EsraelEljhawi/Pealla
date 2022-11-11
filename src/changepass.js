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



function resetPass() {
    
    var email = document.getElementById("emailX").value;
    var oldpass = document.getElementById("oldpass").value;
    var newpass = document.getElementById("newpass").value;
  
    var cred = firebase.auth.EmailAuthProvider.credential(email, oldpass);
  
    auth.currentUser.reauthenticateWithCredential(cred)
        .then(() =>  console.log("Success: Authentication completed!"))
        .catch((er) => console.error("Error: " + er.message));
  
    auth.currentUser.updatePassword(newpass)
        .then(() => console.log("Success: Password is updated!"))
        .catch((err) => console.error("Error: Password updation failed. " + err.message));
  }
  