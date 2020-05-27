<?php 
function validar(){
    $errores = [];
    if(isset($_POST["tamaño"])){
       $tamaño = $_POST["tamaño"];
       $errores["tamaño"] = [];
    
       if(!preg_match("/^[0-9]*$/",$tamaño)){
          $errores["tamaño"]["numerico"] = "ERROR ESTO NO ES UN NUMERO";
       }
       if($tamaño < 0){
          $errores["tamaño"]["min"] =  "COMO MINIMO DEBE SER 0";
       }
       if($tamaño == null){
          $errores["tamaño"]["vacio"] = "NO PUEDE ESTAR VACIO";
       }
    }

    if(isset($_POST["nombre"])){
       $valorNombre = $_POST["nombre"];
       $errores["nombre"] = [];
       if(!preg_match("/^[A-Z]/")){
         $errores["vive en"]["letras"] = "ERROR DEBEN USARSE SOLAMENTE LETRAS, LA INICIAL EN MAYUSCULA";
    
       if(strlen($nombre) > 5){
          $errores["nombre"]["tam"] =  "NO PUEDE ESTAR VACIO";
       }
    } 



    if(isset($_POST["vive en"])){
       $viveen = $_POST["vive en"];
       $errores["vive en"] = [];
       if(!preg_match("/^[A-Z][a-z]+( [A-Z][a-z]+)*$/",$viveen)){
          $errores["vive en"]["letras"] = "ERROR DEBEN USARSE SOLAMENTE LETRAS, LA INICIAL EN MAYUSCULA";
       }
    
       if(strlen($viveen)==0){
          $errores["vive en"]["vacio"] =  "NO PUEDE ESTAR VACIO";
       }
    }

    if(!isset($_POST["nombre"])){
      $errores["nombre"]["vacio"] =  "NO PUEDE ESTAR VACIO";
    }

    if(!isset($_POST["vive en"])){
      $errores["vive en"]["vacio"] =  "NO PUEDE ESTAR VACIO";
    }

    if(!isset($_POST["tamaño"])){
      $errores["tamaño"]["vacio"] =  "NO PUEDE ESTAR VACIO";
    }    

    return $errores;
}