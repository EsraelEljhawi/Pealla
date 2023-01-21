
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {getDatabase,ref,onValue,set,remove,update} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
  
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

/* Number of suppliers */
const db = getDatabase();
const sup = new Map();
const suppliersRef= ref(db, 'Suppliers/');
onValue(suppliersRef, (snapshot) => {
  const Suppliers = snapshot.val();
  for (const suppliers in Suppliers) {
    //console.log(Suppliers[suppliers]);
    if(Suppliers[suppliers].active=="true"){
    sup.set(Suppliers[suppliers]);  }
  } // for ends here
  //console.log(sup.size);
  document.getElementById('numberofsuppliers').innerHTML = sup.size
}); // on value ends here



/* Number of charities */
const db2 = getDatabase();
const char = new Map();
const charitiesRef= ref(db2, 'Charities/');
onValue(charitiesRef, (snapshot) => {
  const Charities = snapshot.val();
  for (const charities in Charities) {
    //console.log(Charities[charities]);
    if(Charities[charities].active=="true"){
    char.set(Charities[charities]);}
  } // for ends here
  //console.log(char.size);
  document.getElementById("numberofcharities").innerHTML = char.size;
}); // on value ends here


/* Number of users */
const db3 = getDatabase();
const use = new Map();
const usersRef= ref(db3, 'Users/');
onValue(usersRef, (snapshot) => {
  const Users = snapshot.val();
  for (const users in Users) {
    //console.log(Users[users]);
    use.set(Users[users]);
  } // for ends here
  //console.log(use.size);
  document.getElementById("numberofusers").innerHTML = use.size;
}); // on value ends here


/* Number of offers */
const db4 = getDatabase();
const off = new Map();
const offersRef= ref(db4, 'Offers/');
onValue(offersRef, (snapshot) => {
  const Offers = snapshot.val();
  for (const offers in Offers) {
    //console.log(Offers[offers]);
    off.set(Offers[offers]);
  } // for ends here
  //console.log(off.size);
  document.getElementById("numberofoffers").innerHTML = off.size;
}); // on value ends here


/* Number of waitingOk elemnts */
const db5 = getDatabase();
const wait = new Map();
const waitingRef= ref(db5, 'WaitingOk/');
onValue(waitingRef, (snapshot) => {
  const Waiting = snapshot.val();
  for (const waiting in Waiting) {
    //console.log(Waiting[waiting]);
    wait.set(Waiting[waiting]);
  } // for ends here
  //console.log(wait.size);
  document.getElementById("numberofwaiting").innerHTML = wait.size;
}); // on value ends here


/* Total accounts number */
const db6 = getDatabase();
const al = new Map();
const allRef= ref(db6, 'AccountType/');
onValue(allRef, (snapshot) => {
  const All = snapshot.val();
  for (const all in All) {
    //console.log(All[all]);
    al.set(All[all]);
  } // for ends here
  //console.log(al.size);
  document.getElementById("totalnumber").innerHTML = al.size;
}); // on value ends here