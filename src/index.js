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
 //writeUserData('11', 'sara', 'sara@gmail.com', '0912752064');

 const db = getDatabase();
const userRef= ref(db, 'users/');
onValue(userRef, (snapshot) => {
    tableBody.innerHTML+="";
  const users = snapshot.val();
  for (const user in users) {
    //console.log(users[user]);
    let tr=`
    <tr data-id=${user} id="tr">
                        <td>
                          <button class="btn btn-primary btn-block" id="delete" class="delete">حـذف</button>
                        </td>
                        <td>
                        ${users[user].email}
                        </td>
                        <td>
                        ${users[user].profile_picture}
                        </td>
                        <td class="text-right">
                           ${users[user].username}
                        </td>
                      </tr>
                      
    `
    tableBody.innerHTML+=tr;
    
    
  }
  //delete data 
 let deleteButtons=document.querySelectorAll("#delete");
 deleteButtons.forEach(deleteBtn=>{
    deleteBtn.addEventListener("click",()=>{
        let userId=deleteBtn.parentElement.parentElement.dataset.id;
        remove(ref(db,"users/"+userId))
        .then(()=>{
            
            
            window.location.reload()
            
        })
        
  });
    
 })
});

 
