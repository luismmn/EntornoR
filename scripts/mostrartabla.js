document.addEventListener("DOMContentLoaded",function(){
	realizarPeticionAsincronaMYSQL();
	

	
});

/////////////////////////////////////////////////////////
// Función crear objeto XMLHTTPRequest///////////////////
/////////////////////////////////////////////////////////

function objetoXHR(){
	if (window.XMLHttpRequest){// El navegador implementa la interfaz XHR de forma nativa
		return new XMLHttpRequest();
	}else if (window.ActiveXObject){ // El navegador no implementa la interfaz XHR de forma nativa
		// Por ejemplo: Internet explorer.
		var versionesIE = new Array("MsXML2.XMLHTTP.5.0", "MsXML2.XMLHTTP.4.0",
			"MsXML2.XMLHTTP.3.0", "MsXML2.XMLHTTP", "Microsoft.XMLHTTP");
		for (var i = 0; i < versionesIE.length; i++){
			try{
				/* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                devolviendo el nuevo objeto creado. */

				return new ActiveXObject(versionesIE[i]);
			} catch (errorControlado) {
				console.log(errorControlado);
			}//Capturamos el error,
		}
	}
	/* Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
     Emitimos un mensaje de error usando el objeto Error.
     Más información sobre gestión de errores en:
     HTTP://www.javascriptkit.com/javatutors/trycatch2.sHTML
     */
	throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function realizarPeticionAsincronaMYSQL(){
	let divResultado =  document.getElementById("resultado");
	divResultado.innerHTML = "";
    
	let miXHR = new objetoXHR();
	miXHR.open("GET", "servidor/datosmysql.php", true);
	miXHR.onreadystatechange = comprobarEstadoPeticion;
	miXHR.send(null);
}



function comprobarEstadoPeticion(){
	switch(this.readyState){
	case 4:
		if (this.status == 200){
			crearTablaJSON(this.responseText);
		}else{
			alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.");
		}
		break;    
	}
}

function crearTablaJSON(respuesta){
	let divResultado =  document.getElementById("resultado");
	divResultado.innerHTML = "";
	var resultados= JSON.parse(respuesta);
	let salida="<table class ='table' border='2'><tr><th>NOMBRE</th><th>nombrecientifico</th><th>tamaño</th><th>tipo</th></tr>";

	for (let i=0; i < resultados.length; i++){
		let objeto = resultados[i];
		salida+="<tr><td>"+objeto.nombre+"</td><td>"+
        objeto.nombrecientifico+"</td><td>"+objeto.tamaño+"</td><td>"+
        objeto.tipo +"</td></tr>";
	}

	salida+="</table>";

	divResultado.innerHTML=salida;

}