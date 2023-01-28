let tableBody=document.querySelector("tbody");

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

const app = initializeApp(firebaseConfig);

const db = getDatabase();
const reportsref= ref(db, 'WaitingOk/');
onValue(reportsref, (snapshot) => {
tableBody.innerHTML+="";
const Reports = snapshot.val();
for (const reports in Reports) {
if(Reports[reports].price!=null)
{
  let tr=`
<tr data-id=${reports} id="tr">
                    <td>
                    ${Reports[reports].supplierName}
                    </td>
                    <td>
                    ${Reports[reports].state}
                    </td>
                    <td>
                    ${Reports[reports].charity}
                    </td>
                    <td>
                    ${Reports[reports].payMethod}
                    </td>
                    <td>
                    ${Reports[reports].price}
                    </td>
                    <td>
                    ${Reports[reports].Quantity}
                    </td>
                    <td>
                    ${Reports[reports].iD}
                    </td>
                    <td>
                    ${Reports[reports].name}
                    </td>
                    <td>
                    ${Reports[reports].user}
                    </td>
                  </tr>         
`
tableBody.innerHTML+=tr;
}
}
});