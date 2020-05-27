<?php
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
$respuesta = array();
$respuesta ["pez"]="";
require_once "conexion.php";
require_once "Paginar.php";


$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT * FROM pescaderia WHERE id = '".$_GET["id"]."'");		
$stmt->execute();
$pescaderia = $stmt->fetchAll(PDO::FETCH_ASSOC)[0];
$html = "<div>";
$html .= "<div>nombre:".$pescaderia["nombre"]."</div>";
$html .= "<div>nombrecientifico:".$pescaderia["nombrecientifico"]."</div>";
$html .= "<div>vive:".$pescaderia["vive"]."</div>";
$html .= "</div>";
$respuesta["pez"] = $html;
echo json_encode($respuesta);
?>