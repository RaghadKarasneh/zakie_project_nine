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


$st= $connect->prepare("INSERT INTO users(city,address,zip_code,phone_number,message,gender,weight,age) VALUES('$city','$address','$zip_code','$phone_number','$message','$gender','$weight','$age');");
$st->execute();
?>