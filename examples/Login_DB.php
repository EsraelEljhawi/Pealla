<?php
    global $link;
    //إستدعاء ملف الاتصال بقاعدة البيانات 
    include 'db_conect.php';
    
    session_start();

    if(isset($_POST['Login'])){
        $User= $_POST['UserName'];
        $Pass= $_POST['Password'];

        $sql="SELECT UserName,Password FROM admins WHERE UserName='$User' && Password ='$Pass'";

        $result = mysqli_query($link, $sql);

        if (mysqli_num_rows($result) > 0) {
        
            $_SESSION['UserName'] = $User;
            header("location: dashboard.html");
            } 
            else 
            {
         echo "Your Login Name or Password is invalid";
      }
    }
   
?>
