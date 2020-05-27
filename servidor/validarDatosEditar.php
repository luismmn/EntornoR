<?php
header('Content-Type: application/json');
require_once "validarFormularioEditar.php";
echo json_encode(validar());
?>