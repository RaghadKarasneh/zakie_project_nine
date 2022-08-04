<?php
include('./connect.php');

$id=$_REQUEST['id'];
$st=$connect->query("SELECT package_type FROM users WHERE id='$id'")->fetchColumn();
echo $st;
?>