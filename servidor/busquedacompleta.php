<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once "conexion.php";

$valorCheck=$_POST["valorCheck"];
$valorSelect=$_POST["valorSelect"];
$valorTexto=$_POST["valorTexto"];

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sql = "SELECT nombre,nombrecientifico,tamaño,tipo FROM pescaderia ";
$sql .= "WHERE 1" ;
if($valorCheck !=""){
    $sql .= " AND Stock = " .$valorCheck;
}
if($valorSelect !=""){
    $sql .= " AND vive = '".$valorSelect."'";
}
if($valorTexto !=""){
    $sql .= " AND nombre LIKE '%" .$valorTexto."%' ";
}
$stmt = $conn->prepare($sql);
$stmt->execute();
$pescaderia = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($pescaderia);
?>