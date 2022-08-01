<?php
include('./connect.php');

$city=$_REQUEST['city'];
$address=$_REQUEST['address'];
$zip_code=$_REQUEST['zip_code'];
$phone_number=$_REQUEST['phone_number'];
$message=$_REQUEST['message'];
$gender=$_REQUEST['gender'];
$weight=$_REQUEST['weight'];
$age=$_REQUEST['age'];
$user_id=$_REQUEST['id'];
$st= $connect->prepare("UPDATE users SET city='$city',address='$address',zip_code='$zip_code',Phone_number='$phone_number',message='$message',gender='$gender',weight='$weight',age='$age' WHERE id='$user_id';");
$st->execute();
?>