let tableBody=document.querySelector("tbody");
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";


import {getDatabase,ref,onValue,set,remove,update} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
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


const db = getDatabase();
const supplierRef= ref(db, 'Suppliers/');
onValue(supplierRef, (snapshot) => {
tableBody.innerHTML+="";
const Suppliers = snapshot.val();
for (const supplier in Suppliers) {
if(Suppliers[supplier].active=="false")
{
  let tr=`
<tr data-id=${supplier} id="tr">
                    <td>
                      <button class="btn btn3-primary btn-block" id="delete" class="delete">حـذف</button>
                    </td>
                    <td>
                    <button class="btn btn2-primary btn-block" id="edit" class="edit">تفعيل</button>
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
else{
  

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
        
        
        window.location.reload()
        
    })
    
});

})

let editButtons=document.querySelectorAll("#edit");
editButtons.forEach(editBtn=>{
  editBtn.addEventListener("click",()=>{
    let username=editBtn.parentElement.parentElement.dataset.id;
    const starCountRef = ref(db, 'Suppliers/' + username);
      var active="true";
      update(ref(db, 'Suppliers/' + username),{
        active: active,
        })
        alert('تم تفعيل الموفر');
        tableBody.innerHTML+="";
        //add authentication
        //
        const auth = getAuth(app);
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val(); // data = all data on firebse
          var email = data.email;
          var password = data.password;
          createUserWithEmailAndPassword(auth, email, password)
          
          .then((userCredential) => {
           // Signed in 
           onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              console.log(uid);
              // const starCountRef = ref(db, 'Suppliers/' + username);
    
                update(ref(db, 'Suppliers/' + username),{
                 uid:uid,
                image:"",
                 description:"",
                deliveryOption:"",
               paymentOption:"",
                workDay:"",
                location:"",
                telephone:""
               })
              
              // ...
            } else {
              // User is signed out
              // ...
            }
            //const newPassword = "esraesra"
            //updatePassword(user, newPassword).then(() => {
              // Update successful.
           // }).catch((error) => {
              // An error ocurred
              // ...
           // });
          });
          
          })
        .catch((error) => {
           const errorCode = error.code;
          const errorMessage = error.message;
      // ..
   
    });
        });
      
      });
  
});


});
//
