<?php
header('Content-Type: application/json; charset=utf-8');
require_once "validarFormulario2.php";
echo json_encode(validarCampos());
?>
