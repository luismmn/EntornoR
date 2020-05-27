<?php
sleep(2);
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once "conexion.php.php";


$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT nombre,nombrecientifico,tamaño,duratipocion FROM pescaderia");
$stmt->execute();
$pescaderia = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($pescaderia);
?>