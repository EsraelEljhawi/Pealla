let tableBody=document.querySelector("tbody");
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";


import {getDatabase,ref,onValue,set,remove,update} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { getAuth, deleteUser,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

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


const db = getDatabase();
const supplierRef= ref(db, 'Suppliers/');
onValue(supplierRef, (snapshot) => {
tableBody.innerHTML+="";
const Suppliers = snapshot.val();
for (const supplier in Suppliers) {
if(Suppliers[supplier].active=='true')
{
  let tr=`
<tr data-id=${supplier} id="tr">
                    <td>
                      <button class="btn btn3-primary btn-block" id="delete" class="delete">حـذف</button>
                    </td>
                    <td id="email"class="email">
                    ${Suppliers[supplier].email}
                    </td>
                    <td id="password" class="password">
                    ${Suppliers[supplier].password}
                    </td>
                    <td>
                    ${Suppliers[supplier].phone}
                    </td>
                    <td>
                    ${Suppliers[supplier].accountType}
                    </td>
                    <td class="text-right" id="username">
                       ${Suppliers[supplier].username}
                    </td>
                  </tr>
                  
`
tableBody.innerHTML+=tr;


}


}
//delete data 
let deleteButtons=document.querySelectorAll("#delete");
deleteButtons.forEach(deleteBtn=>{
deleteBtn.addEventListener("click",()=>{
   // confirm("are you sure you want to delete this?")
    let username=deleteBtn.parentElement.parentElement.dataset.id;
     remove(ref(db,"Suppliers/"+username))
     .then(()=>{
        
      const auth = getAuth();
       const starCountRef = ref(db, 'Suppliers/' + username);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        var email=data.email;
        var password=data.password;
        
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('success');
        // Signed in 
      //  const user = userCredential.user;
      //  console.log(user);
       // ...
       const auth = getAuth();
       const user = auth.currentUser;
      console.log(user);
      deleteUser(user).then(() => {
        console.log('deleted');
        // User deleted.
      }).catch((error) => {
        // An error ocurred
        // ...
      });
        window.location.reload()
      })
      })
      
      .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
      });
      
        
    })
    
});

})


});