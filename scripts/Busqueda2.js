$(function(){
	$("#formbusqueda2").submit(function(event){
		event.preventDefault();
		realizarBusqueda2();
	});
	$("#selectBusqueda").change(function(event){
		realizarBusqueda2();
	});
});
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

function realizarBusqueda2(){
	document.getElementById("spinner").style ="display:block";
	let divResultado =  document.getElementById("resultado");
	divResultado.innerHTML = "";
	let miXHR = new objetoXHR();
	miXHR.open("POST", "servidor/datosBusqueda2.php", true);
	miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	miXHR.onreadystatechange = comprobarEstadoPeticion;
	let selectBusqueda = document.getElementById("selectBusqueda");
	let valorBusqueda = selectBusqueda.value;
	miXHR.send("valorSelectBusqueda="+valorBusqueda);
}
    

function comprobarEstadoPeticion(){
	switch(this.readyState){
	case 4:
		if (this.status == 200){
			crearTablaJSON(this.responseText);
		}else{
			alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.");
		}
		document.getElementById("spinner").style ="display:none";
		break;    
	}
}
