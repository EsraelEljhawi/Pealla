let tableBody=document.querySelector("tbody");
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";

import {getDatabase,ref,onValue,set,remove} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";

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







//to write
function writeUserData(userId, name, email, imageUrl) {

const db = getDatabase();
set(ref(db, 'users/' + userId), {
  username: name,
  email: email,
  profile_picture : imageUrl
}).then((onfull)=>{
    console.log('sucess');
});
}
//writeUserData('12', 'esra', 'sara@gmail.com', '0912752064');
//read data in at the table :)
const db = getDatabase();
const supRef= ref(db, 'Suppliers/');
onValue(supRef, (snapshot) => {
tableBody.innerHTML+="";
const Suppliers = snapshot.val();
for (const Supplier in Suppliers) {
//console.log(users[user]);
let tr=`
<tr data-id=${Supplier} id="tr">
                    
                    <td>
                      
                      <button class="btn btn-primary btn-block" id="delete" class="delete">حـذف</button>
                    </td>
                    <td>
                      
                    <button class="btn btn-primary btn-block"id="active" class="active">تفعيـل</button>
                    </td>
                   
                    <td>
                    ${Suppliers[Supplier].email}
                    </td>
                    <td>
                    ${Suppliers[Supplier].password}
                    </td>
                    <td class="text-right">
                       ${Suppliers[Supplier].accountType}
                    </td>
                    <td class="text-right">
                       ${Suppliers[Supplier].username}
                    </td>
                    
                  </tr>
                  
`
tableBody.innerHTML+=tr;


}
//delete data 
let deleteButtons=document.querySelectorAll("#delete");
deleteButtons.forEach(deleteBtn=>{
deleteBtn.addEventListener("click",()=>{
    let username=deleteBtn.parentElement.parentElement.dataset.id;
    remove(ref(db,"Suppliers/"+username))
    .then(()=>{
        
        
        window.location.reload()
        
    })
    
});
})
});



