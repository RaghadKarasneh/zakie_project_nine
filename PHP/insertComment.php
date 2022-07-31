<?php
include('./connect.php');

$user_id=$_REQUEST['userId'];
$comment=$_REQUEST['comment'];
$newComment=$_REQUEST['new_comment'];
$commentId=$_REQUEST['comment_id'];
$post_id=$_REQUEST['postId'];
$deleted=$_REQUEST['deleted'];
$changeDate= time();



if ($comment != null) {
    $st= $connect->prepare("INSERT INTO comments(comment,user_id,post_id) VALUES('$comment','$user_id','$post_id');");
    $st->execute();
}
elseif ($newComment != null) {
    $st= $connect->prepare("UPDATE comments SET comment='$newComment',updated_at='$changeDate' WHERE id='$commentId';");
    $st->execute();
}
elseif ($deleted == true) {
    $st= $connect->prepare("UPDATE comments SET deleted=1 WHERE id='$commentId';");
    $st->execute();
}
?>