
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

/* Number of active suppliers */
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



/* Number of active charities */
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


/* Number of waitingOk elements */
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
  document.getElementById("totalnumber").innerHTML = sup.size + char.size + use.size;
}); // on value ends here


/* For date and time */
// function refreshTime() {
//   const timeDisplay = document.getElementById("time");
//   const dateString = new Date().toLocaleString();
//   const formattedString = dateString.replace(", ", " - ");
//   timeDisplay.textContent = formattedString;
// }
//   setInterval(refreshTime, 1000);

/* Number of inactive charities */
const db7 = getDatabase();
const char1 = new Map();
const inactivecharitiesRef= ref(db7, 'Charities/');
onValue(inactivecharitiesRef, (snapshot) => {
  const iCharities = snapshot.val();
  for (const icharities in iCharities) {
    //console.log(iCharities[charities]);
    if(iCharities[icharities].active=="false"){
    char1.set(iCharities[icharities]);}
  } // for ends here
  //console.log(char1.size);
  document.getElementById("numberofinactivecharities").innerHTML = char1.size;
}); // on value ends here


/* Number of inactive suppliers */
const db8 = getDatabase();
const sup1 = new Map();
const inactivesuppliersRef= ref(db8, 'Suppliers/');
onValue(inactivesuppliersRef, (snapshot) => {
  const iSuppliers = snapshot.val();
  for (const isuppliers in iSuppliers) {
    //console.log(iSuppliers[suppliers]);
    if(iSuppliers[isuppliers].active=="false"){
    sup1.set(iSuppliers[isuppliers]);  }
  } // for ends here
  //console.log(sup1.size);
  document.getElementById('numberofinactivesuppliers').innerHTML = sup1.size
}); // on value ends here

/* Number of complaints */
const db9 = getDatabase();
const comp = new Map();
const complaintsRef= ref(db9, 'Complaints/');
onValue(complaintsRef, (snapshot) => {
  const Complaints = snapshot.val();
  for (const complaints in Complaints) {
    //console.log(Complaints[complaints]);
    comp.set(Complaints[complaints]);
  } // for ends here
  //console.log(comp.size);
  document.getElementById("numberofcomplaints").innerHTML = comp.size;
}); // on value ends here