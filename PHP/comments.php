<?php
include('./connect.php');

// $post_id=$_REQUEST('postId');
$post_id=1;

$st= $connect->prepare("SELECT comments.user_id,comments.deleted,comments.id,comments.comment,comments.created_at,users.name,users.image FROM comments LEFT JOIN users ON comments.user_id=users.id  WHERE post_id='$post_id'");
$st->execute();
$info=$st->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($info));
?>