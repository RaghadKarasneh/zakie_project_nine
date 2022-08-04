<?php
include('./connect.php');

$st= $connect->prepare('SELECT * FROM posts');
$st->execute();
$info=$st->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($info));
?>