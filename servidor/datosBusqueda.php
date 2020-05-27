<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once "conexion.php";

$valorBusqueda=$_POST["valor"];//valor de la busqueda

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT nombre,nombrecientifico,tamaño,tipo FROM pescaderia WHERE nombre LIKE '%".$valorBusqueda."%'");
$stmt->execute();
$pescaderia = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($pescaderia);
?>