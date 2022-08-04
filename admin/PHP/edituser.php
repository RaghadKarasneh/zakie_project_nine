<?php
include('./connect.php');

$id=$_REQUEST['id'];
$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$city=$_REQUEST['city'];
$phone=$_REQUEST['phone'];

$st= $connect->prepare("UPDATE users SET username='$name',email='$email',city='$city',phone_number='$phone' WHERE id='$id';");
$st->execute();
?>