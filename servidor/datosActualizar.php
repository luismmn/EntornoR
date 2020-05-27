<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once "conexion.php";
$listadopescaderia = array();


$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$nombre = $_POST['nombre']
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sql = $conn->prepare("UPDATE FROM pescaderia WHERE nombre='".$_POST['nombreEditar']."', nombrecientifico='".$_POST['NCEditar']."', vive='".$_POST['viveEditar']."', tamaño='".$_POST['tamañoEditar']."', tipo='".$_POST['tipoEditar']."' WHERE nombre='".$_POST['nombreEditarSelect']."'");
$sql->execute();
echo json_encode(1);
?>