/* To send a verification email */
var imported = document.createElement('script');
imported.src = 'https://smtpjs.com/v3/smtp.js';
document.head.appendChild(imported);



 /* Email function */
function sendEmail(useremail) {
  Email.send({
    SecureToken: "44388b74-f66f-4801-8bc4-e6c6ff0aadba",
    To: useremail,
    From: "paellamanager1@gmail.com",
    Subject: "لقد تم تفعيل حسابك!",
    Body: "مرحيا! لقد تم تفعيل حسابك, يمكنك الان تسجيل الدخول والوصول الي حسابك الشخصي على تطبيق باييلا",
  }) .then(function (message) {
     // alert("تم تفعيل الموفر وارسال  رسالة اليه")
    });
    }



let tableBody=document.querySelector("tbody");
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";


import {getDatabase,ref,onValue,set,remove,update} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged ,updatePassword,signInWithEmailAndPassword,updateProfile } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

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
var SignUpDate;

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
                    <td>
                    ${Suppliers[supplier].phone}
                    </td>
                    <td>
                    ${Suppliers[supplier].accountType}
                    </td>
                    <td>
                    ${Suppliers[supplier].name}
                    </td>
                    <td class="text-right" id="username">
                       ${Suppliers[supplier].username}
                    </td>
                  </tr>
                  
`
tableBody.innerHTML+=tr;
}
else{ 
}}
//delete data
let deleteButtons=document.querySelectorAll("#delete");
deleteButtons.forEach(deleteBtn=>{
deleteBtn.addEventListener("click",()=>{
  document.getElementById('Quastion').classList.add('opa');
  var yes=document.getElementById('yes');
  yes.addEventListener("click",()=>{
    document.getElementById('Quastion').classList.remove('opa');
    let username=deleteBtn.parentElement.parentElement.dataset.id;
    document.getElementById('pup').classList.add('opa');
    remove(ref(db,"Suppliers/"+username));
    /* Delete user from account type table */
  remove(ref(db,"AccountType/"+username))
    .then(()=>{  
      setTimeout(function(){
        document.getElementById('pup').classList.remove('opa');
        window.location.reload()
        },3000);
    }); } // for result
)});
})
let editButtons=document.querySelectorAll("#edit");
editButtons.forEach(editBtn=>{
  editBtn.addEventListener("click",()=>{
    document.getElementById('Quastion').classList.add('opa');
    var yes=document.getElementById('yes');
    yes.addEventListener("click",()=>{
      document.getElementById('Quastion').classList.remove('opa');
    let username=editBtn.parentElement.parentElement.dataset.id;
    const starCountRef = ref(db, 'Suppliers/' + username);
      var active="true";
      update(ref(db, 'Suppliers/' + username),{
        active: active,
        //Type:'Supplier'
        })     
        //add authentication
        const auth = getAuth();
        const user = auth.currentUser;
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val(); // data = all data on firebse
          var email = data.email;
          var password = data.password;
          var emuser=data.username;
          sendEmail(email);
          const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         // update displayname
         updateProfile(auth.currentUser, {
           displayName: emuser, 
         }).then(() => {
           console.log('updated') 
         }).catch((error) => {
           console.log(error);
         });
        // ...
        })
         .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
         /* Authentication state  */
          onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              document.getElementById('pup').classList.add('opa');
             const SignUpDate=user.metadata.creationTime;
             const LastSee=user.metadata.lastSignInTime;
              console.log(uid);
              // const starCountRef = ref(db, 'Suppliers/' + username);
                update(ref(db, 'Suppliers/' + username),{
                 uid:uid,
                
                image:"https://firebasestorage.googleapis.com/v0/b/pealla-499cf.appspot.com/o/shop.png?alt=media&token=1d9b1269-f81e-4501-b374-2a317b8afac5",
                 description:"",
                deliveryOption:"",
               paymentOption:"",
                workDay:"",
                location:"",
                SignUpDate:SignUpDate,
                LastSee:LastSee,
               }).then(() => {
                setTimeout(function(){
                  document.getElementById('pup').classList.remove('opa');
                  window.location.reload()
                  },3000);
              }).catch((error) => {
                print(error);
              });
              // ...
            } else {
              // User is signed out
              // ...
            }
          })
        }); }//for result
)});
});
});
//
