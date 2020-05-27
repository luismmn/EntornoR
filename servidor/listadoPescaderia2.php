<?php

require_once "conexion.php";


// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT id,nombre,nombrecientifico,tamaño,tipo,vive FROM pescaderia ";
$pescaderias = $conexion->query($sql);
?>