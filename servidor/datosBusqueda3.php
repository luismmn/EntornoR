<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once "conexion.php";

$valorBusqueda=$_POST["checkBusqueda"];//valor de la busqueda
$where = "";
if($valorBusqueda != ""){
    $where = " WHERE Stock = '".$valorBusqueda."' ";  
}
$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT nombre,nombrecientifico,tamaño,tipo FROM pescaderia ".$where);
$stmt->execute();
$pescaderia = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($pescaderia);
?>