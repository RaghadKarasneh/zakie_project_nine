<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: access");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$dsn='mysql:host=localhost;dbname=zakie_project';

try {
    $connect= new PDO($dsn,'root','');

} catch (PDOException $error) {
    echo 'Connection Error, Error message:'.$error->getMessage();
}
?>
