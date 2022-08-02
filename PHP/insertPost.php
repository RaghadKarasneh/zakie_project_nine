<?php
include('./connect.php');

$user_id=['userId'];
$title=['title'];
// $image=['image'];
// $excerpt=['excerpt'];
$body=['body'];

$st= $connect->prepare("INSERT INTO posts(userId,title,body) VALUES('$user_id','$title','$body');");
$st->execute();
?>