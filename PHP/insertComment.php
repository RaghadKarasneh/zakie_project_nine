<?php
include('./connect.php');

$user_id=$_REQUEST['userId'];
$comment=$_REQUEST['comment'];
$post_id=$_REQUEST['postId'];


$st= $connect->prepare("INSERT INTO comments(comment,userId,postId) VALUES('$comment','$user_id','$post_id');");
$st->execute();
?>