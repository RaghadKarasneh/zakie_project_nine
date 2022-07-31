<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

<<<<<<< HEAD
$dsn='mysql:host=localhost;dbname=test';
=======
$dsn='mysql:host=localhost;dbname=zakie_project';
>>>>>>> 90c6e120d0601702a61017270e777f61007d3ec3

try {
    $connect= new PDO($dsn,'root','');

} catch (PDOException $error) {
    echo 'Connection Error, Error message:'.$error->getMessage();
}
?>