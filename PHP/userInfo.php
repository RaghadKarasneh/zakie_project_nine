<?php
include('./connection.php');

$city=$_REQUEST['city'];
$address=$_REQUEST['address'];
$zip_code=$_REQUEST['zip_code'];
$phone_number=$_REQUEST['phone_number'];
$message=$_REQUEST['message'];
$gender=$_REQUEST['gender'];
$weight=$_REQUEST['weight'];
$height=$_REQUEST['height'];
$age=$_REQUEST['age'];
$user_id=$_REQUEST['id'];
$calories=$_REQUEST['calories'];
$package_type=$_REQUEST['package_type'];
$st= $conn->prepare("UPDATE users SET city='$city',address='$address',zip_code='$zip_code',phone_number='$phone_number',message='$message',gender='$gender',weight='$weight',height='$height',age='$age',calories='$calories',package_type='$package_type' WHERE id='$user_id';");  
   $st->execute();

// $st= $connect->prepare("UPDATE users SET city='$city',address='$address',zip_code='$zip_code',phone_number='$phone_number',message='$message',gender='$gender',weight='$weight',height='$height',age='$age' WHERE id='$user_id';"); 

?>