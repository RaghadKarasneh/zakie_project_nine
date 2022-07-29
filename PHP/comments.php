<?php
include('./connect.php');

$post_id=$_REQUEST('postId');

$st= $connect->prepare("SELECT * FROM comments WHERE post_id='$post_id'");
$st->execute();
$info=$st->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($info));
?>