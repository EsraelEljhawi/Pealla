let tableBody=document.querySelector("tbody");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {getDatabase,ref,onValue,set,remove,update} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { getAuth, deleteUser,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

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
const charityRef= ref(db, 'Charities/');
onValue(charityRef, (snapshot) => {
tableBody.innerHTML+="";
const Charities = snapshot.val();
for (const charity in Charities) {
if(Charities[charity].active=="true")
{
  let tr=`
<tr data-id=${charity} id="tr">
                    <td>
                      <button class="btn btn3-primary btn-block" id="delete" class="delete">حـذف</button>
                    </td>
                    <td id="email"class="email">
                    ${Charities[charity].email}
                    </td>
                    <td id="password" class="password">
                    ${Charities[charity].password}
                    </td>
                    <td>
                    ${Charities[charity].phone}
                    </td>
                    <td>
                    ${Charities[charity].name}
                    </td>
                    <td class="text-right" id="username">
                    ${Charities[charity].username}
                    </td>
                  </tr>         
`
tableBody.innerHTML+=tr;
}}


//delete data 
let deleteButtons=document.querySelectorAll("#delete");
deleteButtons.forEach(deleteBtn=>{
deleteBtn.addEventListener("click",()=>{
    
   // confirm("are you sure you want to delete this?")
     let username=deleteBtn.parentElement.parentElement.dataset.id;
    //  remove(ref(db,"Suppliers/"+username))
    //  .then(()=>{
        
    //   const auth = getAuth();
       const starCountRef = ref(db, 'Charities/' + username);
       onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        var email=data.email;
        var password=data.password;
        console.log(email)
        console.log(password)
        const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const auth = getAuth();

    deleteUser(user).then(() => {
  // User deleted.
  window.location.reload();
  remove(ref(db,"Charities/"+username))
     }).catch((error) => {
  // An error ocurred
  // ...
   });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   });  
      })
    });

  })

});