<?php

function validarCampos(){
   $errores = [];
   if(isset($_POST["nombre"])){
      $valorNombre = $_POST["nombre"];
      $errores["nombre"] = [];
      if(!preg_match("/^[A-Z]+$/",$valorNombre)){
         $errores["nombre"]["letras"] = "ERROR DEBEN USARSE SOLAMENTE LETRAS, ";
      } 
      if(strlen($valorNombre) < 5){
          $errores["nombre"]["tam"] =  "NO PUEDE ESTAR VACIO";
      }
   }


   if(isset($_POST["nombrecientifico"])){
      $valorNC = $_POST["nombrecientifico"];
      $errores["nombrecientifico"] = [];
      if(!preg_match("/^[A-Z]+$/",$valorNC)){
         $errores["nombrecientifico"]["letras"] = "ERROR DEBEN USARSE SOLAMENTE LETRAS, ";
      }
      if(strlen($valorNC) < 5){
         $errores["nombrecientifico"]["tam"] =  "NO PUEDE ESTAR VACIO";
      }
   }

   if(isset($_POST["viveSelect"])){
      $valorVive = $_POST["viveSelect"];
      if($valorVive == "0"){
         $errores["viveSelect"]["vacio"] =  "ESCOJA UNA OPCION";
      }else{
         $valoresPosibles = array("mar","rio","lago","oceano");
         if(!in_array($valorVive,$valoresPosibles)){
            $errores["viveSelect"]["opcion"] = "VALOR INDICADO NO ESTA EN LAS OPCIONES";
         }
      }
   }





   /*
   if(isset($_POST["tamaño"])){
      
    $valorTamaño = $_POST["tamaño"];
    $errores["tamaño"] = [];
 
    if(!preg_match("/^[0-9]*$/",$valorTamaño)){
       $errores["tamaño"]["numerico"] = "ERROR ESTO NO ES UN NUMERO";
    }
    if($valorTamaño <= 0){
       $errores["tamaño"]["min"] =  "COMO MINIMO DEBE SER 0";
    }
    if($valorTamaño == null){
       $errores["tamaño"]["vacio"] = "NO PUEDE ESTAR VACIO";
    }
 }
 */
    return $errores;

}