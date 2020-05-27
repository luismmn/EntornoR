<?php 
function validar(){
    $errores = [];
    
    if(isset($_POST["tamañoEditar"])){
       $tamaño = $_POST["tamañoEditar"];
       $errores["tamañoEditar"] = [];
    
       if(!preg_match("/^[0-9]*$/",$tamaño)){
          $errores["tamañoEditar"]["numerico"] = "ERROR ESTO NO ES UN NUMERO";
       }

      if($tamaño < 0){
          $errores["tamañoEditar"]["min"] =  "COMO MINIMO DEBE SER 1";
      }

      if(trim($_POST["tamañoEditar"])== ""){
        $errores["tamañoEditar"]["vacio"] =  "NO PUEDE ESTAR VACIO";        
      }     
    }

    if(isset($_POST["nombreEditar"])){
       $nombre = $_POST["nombreEditar"];
       $errores["nombreEditar"] = [];

      if(trim($_POST["nombreEditar"]) == ""){
        $errores["nombreEditar"]["vacio"] =  "NO PUEDE ESTAR VACIO";
      }
    } 

    if(isset($_POST["viveEditar"])){
       $vive = $_POST["viveEditar"];
       $errores["viveEditar"] = [];

      if(trim($_POST["viveEditar"]) == ""){
        $errores["viveEditar"]["vacio"] =  "SELECCIONA UN LUGAR DONDE VIVE";
      }
    } 


    if(isset($_POST["tipoEditar"])){
       $tipo = $_POST["tipoEditar"];
       $errores["tipoEditar"] = [];

      if(trim($_POST["tipoEditar"]) == ""){
        $errores["tipoEditar"]["vacio"] =  "SELECCIONA UN TIPO";
      }
    } 


    if(isset($_POST["NCEditar"])){
       $NC = $_POST["NCEditar"];
       $errores["NCEditar"] = [];
       if(!preg_match("/^[A-Z][a-z]+( [A-Z][a-z]+)*$/",$NC)){
          $errores["NCEditar"]["letras"] = "ERROR DEBEN USARSE SOLAMENTE LETRAS, LA INICIAL EN MAYUSCULA";
       }

      if(trim($_POST["NCEditar"]) == ""){
        $errores["NCEditar"]["vacio"] =  "NO PUEDE ESTAR VACIO";        
      }
    }   
  
    return $errores;
}