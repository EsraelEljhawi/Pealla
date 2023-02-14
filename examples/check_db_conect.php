<?php

//مستضيف قاعدة  البيانات 
$database['host'] = 'localhost';
//اسم المستخدم لقاعدة  البيانات 
$database['username'] = 'root';
//كلمة المرور لمستخدم قاعدة  البيانات 
$database['userpass'] = '';
//اسم قاعدة  البيانات 
$database['name'] = 'Paella';

// Create connection

$link = mysqli_connect ($database['host'],$database['username'],$database['userpass'],$database['name'])or die(mysqli_connect_error());
// Check connection
if(!$link){
		    echo 'Cannot login';
		}else{
		    echo 'Succesfull conected to db';
		}
		

?>