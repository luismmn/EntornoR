<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once "conexion.php";



$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$nombre = $_POST['nombre']
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sql = $conn->prepare("UPDATE pescaderia WHERE nombre='".$_POST['nombreEditar']."', NC='".$_POST['NCEditar']."', tipo='".$_POST['tipoEditar']."', tamaño='".$_POST['tamañoEditar']."', vive='".$_POST['viveEditar']."' WHERE nombre='".$_POST['nombreEditarSelect']."'");
$sql->execute();
echo json_encode(1);
?>