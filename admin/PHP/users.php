<?php
include('./connect.php');

$st= $connect->prepare('SELECT * FROM users');
$st->execute();
$info=$st->fetchALl(PDO::FETCH_ASSOC);
print_r(json_encode($info));

?>