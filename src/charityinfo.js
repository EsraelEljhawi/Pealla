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
    
    var result = confirm("هل انت متأكد من حذف هذه الجمعية؟")
     if(result == true){
     let username=deleteBtn.parentElement.parentElement.dataset.id;
    //  remove(ref(db,"Suppliers/"+username))
    //  .then(()=>{
        
    //   const auth = getAuth();
       const starCountRef = ref(db, 'Charities/' + username);
       onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        var email=data.email;
        var password=data.password;
        const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const auth = getAuth();
    document.getElementById('pup').classList.add('opa');
    deleteUser(user).then(() => {
  // User deleted.
  remove(ref(db,"Charities/"+username))
  /* Delete user from account type table */
  remove(ref(db,"AccountType/"+username));
  setTimeout(function(){
    document.getElementById('pup').classList.remove('opa');
    window.location.reload()
    },3000);
   // 
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
      });
    }//end of result
    });

  });

});