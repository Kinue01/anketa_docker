<?php
include_once './RequestMethodMapping.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Credentials: true');
header("Content-Type: application/json");

$requestMethod = $_SERVER["REQUEST_METHOD"];

$mapping = new RequestMethodMapping();
$data = $mapping->handleRequest($requestMethod);

echo json_encode($data);