<?php
include_once "connection.php";


    $email     =  $_REQUEST['email'];
    $password  = md5($_REQUEST['password']);

    $sql       = "SELECT * FROM users WHERE email='$email' AND password='$password'";

    $st= $conn->prepare("SELECT * FROM users WHERE email='$email' AND password='$password'");
    $st->execute();
    $info=$st->fetch(PDO::FETCH_ASSOC);
    print_r(json_encode($info));
     ?>
