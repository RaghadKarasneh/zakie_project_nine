<?php
include('./connect.php');

$id=$_REQUEST['id'];
$st= $connect->prepare("UPDATE posts SET deleted=1 WHERE id='$id'");
$st->execute();
?>