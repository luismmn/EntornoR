$(function(){
	$("#formbusqueda3").submit(function(event){
		event.preventDefault();
		realizarBusqueda3();
	});
	$("#checkBusqueda").change(function(event){
		realizarBusqueda3();
	});
});
function realizarBusqueda3(){
	let inputCheck = $("#checkBusqueda");
	let valorCheck = "";
	if(inputCheck.prop("checked")){
		valorCheck = inputCheck.val();
	}
	let form = new FormData();
	form.append("checkBusqueda",valorCheck);
	$("#spinner").css("display","block");
	fetch("servidor/datosBusqueda3.php", {
		method: "post",
		body: form
	}).then(gestionarErrores)
		.then(function(response){ return response.json();})
		.then(crearTablaJSON3)
		.catch(function(err) {
			console.log(err);
			alert("SE HA PRODUCIDO UN ERROR LA PARSEAR LOS DATOS");
		})
		.finally(function(){
			$("#spinner").css("display","none");
		});
}
function gestionarErrores(response){
	if (!response.ok){
		throw Error("SE HA PRODUCIDO UN ERROR AL REALIZAR LA PETICION FETCH" + response);
	}
	return response;
}
function crearTablaJSON3(respuesta){
	let divResultado =  document.getElementById("resultado");
	divResultado.innerHTML = "";
	var resultados= respuesta;
	let salida="<table class='table' border='2'><tr><th>NOMBRE</th><th>nombrecientifico</th><th>tamaño</th><th>tipo</th></tr>";

	for (let i=0; i < resultados.length; i++){
		let objeto = resultados[i];
		salida+="<tr><td>"+objeto.nombre+"</td><td>"+
        objeto.nombrecientifico+"</td><td>"+objeto.tamaño+"</td><td>"+
        objeto.tipo +"</td></tr>";
	}

	salida+="</table>";

	divResultado.innerHTML=salida;

}