<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

require_once "conexion.php";

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT nombre,nombrecientifico,tamaño,tipo FROM pescaderia";
$resultado = $conexion->query($sql);
$pescaderias = array();
if ($resultado->num_rows > 0) {
    while($pescaderia = $resultado->fetch_assoc()) {
        $pescaderias[] = $pescaderia;
    }
}
echo json_encode($pescaderias);