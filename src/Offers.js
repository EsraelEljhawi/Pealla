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


// TODO replace id with key
const db = getDatabase();
const offerRef= ref(db, 'Offers/');
onValue(offerRef, (snapshot) => {
    tableBody.innerHTML+="";
  const Offers = snapshot.val();
  for (const offer in Offers) {
    let tr=`
    <tr data-id=${offer} id="tr">
                        <td>
                          <button class="btn btn-primary btn-block" id="delete" class="delete">حـذف</button>
                        </td>
                        <td>
                        ${Offers[offer].supplieruName}
                        </td>
                        <td>
                        ${Offers[offer].offerType}
                        </td>
                        <td>
                        ${Offers[offer].name}
                        </td>
                        <td class="text-right">
                           ${Offers[offer].id}
                        </td>
                      </tr>             
    `
    tableBody.innerHTML+=tr;
  }
  /*
  //delete data 
 let deleteButtons=document.querySelectorAll("#delete");
 deleteButtons.forEach(deleteBtn=>{
    deleteBtn.addEventListener("click",()=>{
       // confirm("are you sure you want to delete this?")
        let username=deleteBtn.parentElement.parentElement.dataset.id;
        remove(ref(db,"Offers/"+username))
        .then(()=>{
            window.location.reload()
        })   
  });  
 })
*/
});