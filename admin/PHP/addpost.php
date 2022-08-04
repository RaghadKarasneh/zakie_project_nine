<?php
include('./connect.php');

$title=$_REQUEST['title'];
$body=$_REQUEST['body'];


$st= $connect->prepare("INSERT INTO posts(title,body) VALUES('$title','$body');");
$st->execute();
?>