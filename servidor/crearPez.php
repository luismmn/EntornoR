<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
require_once "validarFormulario2.php";
$respuesta = array();
$respuesta["correcto"] = false;
$errores = validarCampos();
$respuesta["errores"] = $errores;//GUARDA ERRORES
$hayErrores = false;

foreach($errores as $campo => $erroresCampo){
    if(count($erroresCampo)> 0){
        $hayErrores = true;
        break;
    }
}

if(!$hayErrores){
        require_once "conexion.php";

        $conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
            if (!$conexion) {
                die("CONEXION FALLIDA: " . mysqli_connect_error());
        }
        $nombre = $_POST["nombre"];
        $vive = $_POST["viveSelect"];
        $nombrecientifico = $_POST["nombrecientifico"];/* TIENE QUE COINCIDIR NAME DEL HTML*/
        $consulta = "INSERT INTO pescaderia (nombre , vive , nombrecientifico) VALUES ('$nombre','$vive' , '$nombrecientifico')";
        if ($conexion->query($consulta) === TRUE) {
            $last_id = $conexion->insert_id;
           $respuesta["correcto"]=TRUE;
           $respuesta["idCreado"] = $last_id;
        } else {
            echo "Error: " . $consulta . "<br>" . $conexion->error;
        }
                //Codigo de ejecutar
    }else{
        //devolvemos errores;
    }

    echo json_encode($respuesta);
