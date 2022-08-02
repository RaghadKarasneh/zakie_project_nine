<?php
include('./connect.php');

$user_id=['userId'];
$title=['title'];
$image=['image'];
$excerpt=['excerpt'];
$body=['body'];

$st= $connect->prepare("INSERT INTO posts(userId,title,image,excerpt,body) VALUES('$user_id','$title','$image','$excerpt','$body');");
$st->execute();
?>