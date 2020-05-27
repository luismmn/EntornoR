<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once "conexion.php";

$pescaderia = array();

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);	
$stmt = $conn->prepare("SELECT nombre FROM pescaderia where vive ='".$_POST["selectP"]."'");		
$stmt->execute();
$pescaderia = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($pescaderia);
?>