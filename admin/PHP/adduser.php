<?php
include('./connect.php');

$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$password=md5($_REQUEST['password']);
$city=$_REQUEST['city'];
$phone=$_REQUEST['phone'];

$st= $connect->prepare("INSERT INTO users(username,email,password,city,phone_number) VALUES('$name','$email','$password','$city','$phone');");
$st->execute();
?>