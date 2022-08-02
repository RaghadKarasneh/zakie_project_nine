<?php
include('./connect.php');

$user_id=$_REQUEST['user_id'];
$title=$_REQUEST['title'];
// $image=['image'];
// $excerpt=['excerpt'];
$body=$_REQUEST['body'];

$st=$connect->prepare("INSERT INTO posts(user_id,title,body) VALUES('$user_id','$title','$body');");
$st->execute();

?>