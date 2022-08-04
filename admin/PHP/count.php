<?php
include('./connect.php');

$data=[];

$comments_rows = $connect->query('select count(id) from comments')->fetchColumn(); 
$users_rows = $connect->query('select count(id) from users')->fetchColumn(); 
$posts_rows = $connect->query('select count(id) from posts')->fetchColumn(); 
array_push($data,$comments_rows,$users_rows,$posts_rows);
print_r(json_encode($data));
?>