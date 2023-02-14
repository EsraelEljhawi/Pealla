<?php
global $link;

include 'db_conect.php';

$UserName = mysqli_real_escape_string($link, $_REQUEST['UserName']);
$UserEmail = mysqli_real_escape_string($link, $_REQUEST['Email']);
$Phone = mysqli_real_escape_string ($link, $_REQUEST['Phone']);
$Password = mysqli_real_escape_string($link, $_REQUEST['Password']);

$sql = "INSERT INTO `admins`(`UserName`,`Email`, `Phone`, `Password`) VALUES ('$UserName','$UserEmail', '$Phone', '$Password')";

if (mysqli_query($link, $sql)){
header("location:Login_Edit.html");
}
else
{
echo "ERROR: This user already exists just Login NOW";
}
// close connection


mysqli_close($link);

?>
