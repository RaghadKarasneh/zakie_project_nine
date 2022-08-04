<?php
include('./connect.php');

$id=$_REQUEST['id'];
$title=$_REQUEST['title'];
$body=$_REQUEST['body'];


$st= $connect->prepare("UPDATE posts SET title='$title',body='$body' WHERE id='$id';");
$st->execute();
?>