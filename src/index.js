    let tableBody=document.querySelector("tbody");

    // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
    // import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged ,updatePassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
    // import {getDatabase,ref,onValue,set,remove} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
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
  
    
   



/*
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
*/

 const db = getDatabase();
const userRef= ref(db, 'Users/');
onValue(userRef, (snapshot) => {
    tableBody.innerHTML+="";
  const Users = snapshot.val();
  for (const user in Users) {
    //console.log(users[user]);
    let tr=`
    <tr data-id=${user} id="tr">
                        <td>
                          <button class="btn btn-primary btn-block" id="delete" class="delete">حـذف</button>
                        </td>
                        <td id="email"class="email">
                        ${Users[user].email}
                        </td>
                        <td>
                        ${Users[user].phone}
                        </td>
                        <td class="text-right">
                           ${Users[user].username}
                        </td>
                      </tr>
                      
    `
    tableBody.innerHTML+=tr;
  }
//delete data 
let deleteButtons=document.querySelectorAll("#delete");
deleteButtons.forEach(deleteBtn=>{
deleteBtn.addEventListener("click",()=>{
    
    confirm("are you sure you want to delete this?")
     let username=deleteBtn.parentElement.parentElement.dataset.id;
       const starCountRef = ref(db, 'Users/' + username);
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
    console.log(user);
    const auth = getAuth();

    deleteUser(user).then(() => {
  // User deleted.
  remove(ref(db,"Users/"+username))
  /* Delete user from account type table */
  remove(ref(db,"AccountType/"+username));
  window.location.reload();
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



