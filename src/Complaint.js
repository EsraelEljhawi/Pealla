let tableBody=document.querySelector("tbody");
// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged ,updatePassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
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


const db = getDatabase();
const complaintRef = ref(db, 'Complaints/');
onValue(complaintRef, (snapshot) => {
    tableBody.innerHTML += "";
    const Complaints = snapshot.val();
    for (const Complaint in Complaints) {
        //console.log(users[user]);
        const x =`
        <div class="col-4" data-id=${Complaint}>
                <div class="card">
                    <div class="card-body">
                    <img src=${Complaints[Complaint].currentUserImage} class="image-dash">
                    <br><br>
                        <h5 class="card-title">${Complaints[Complaint].currentUsername}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${Complaints[Complaint].currentUserEmail}</h6>
                        <h6 class="card-title">${Complaints[Complaint].type}</h6>
                        <br>
                        <hr>
                        <div style="width:100%;height:150px;line-height:3em;overflow:scroll;padding:5px;">
                        <div>${Complaints[Complaint].complaint}</div></div>
                        <hr>
                        <br>
                        <button class="btn btn-danger" id="delete" class="delete">حـذف</button>
                    </div>
                </div>
            </div>
                           
        `
        tableBody.innerHTML+=x;


 
      }
      
      //delete data 
     let deleteButtons=document.querySelectorAll("#delete");
     deleteButtons.forEach(deleteBtn=>{
        deleteBtn.addEventListener("click",()=>{
           // confirm("are you sure you want to delete this?")
            let complaint=deleteBtn.parentElement.parentElement.parentNode.dataset.id;
            remove(ref(db,"Complaints/" + complaint))
            .then(()=>{
                window.location.reload();
            })
            
      });
        
     })
    });

