"use strict";

$(function () {

	$("#formCompleto").submit(function (event) {
		event.preventDefault();
		realizarBusquedaCompleta();
	});
	$("#valorTexto").keyup(function (event) {
		realizarBusquedaCompleta();
	});
	$("#valorTexto").change(function (event) {
		realizarBusquedaCompleta();
	});
	$("#ValorSelect").change(function (event) {
		realizarBusquedaCompleta();
	});
	$("#valorCheck").change(function (event) {
		realizarBusquedaCompleta();
	});
});
function realizarBusquedaCompleta() {
	var inputCheck = $("#checkBusqueda");
	var valorCheck = "";
	if (inputCheck.prop("checked")) {
		valorCheck = inputCheck.val();
	}
	var valorSelect = $("#valorSelect").val().trim();
	var valorTexto = $("#valorTexto").val().trim();
	$.ajax({
		url: "servidor/busquedacompleta.php",
		data: { valorCheck: valorCheck, valorSelect: valorSelect, valorTexto: valorTexto },
		method: "POST",
		dataType: "JSON",
		BeforeSend: function BeforeSend() {
			$("#spinner").css("display", "block");
		}
	}).done(crearTablaJSON4).fail(function () {
		alert("error");
		$("#resultado").html("error");
	}).always(function () {
		$("#spinner").css("display", "none");
	});
}

function crearTablaJSON4(respuesta) {
	var divResultado = document.getElementById("resultado");
	divResultado.innerHTML = "";
	var resultados = respuesta;
	var salida = "<table class='table' border='2'><tr><th>NOMBRE</th><th>nombrecientifico</th><th>tamaño</th><th>tipo</th></tr>";

	for (var i = 0; i < resultados.length; i++) {
		var objeto = resultados[i];
		salida += "<tr><td>" + objeto.nombre + "</td><td>" + objeto.nombrecientifico + "</td><td>" + objeto.tamaño + "</td><td>" + objeto.tipo + "</td></tr>";
	}

	salida += "</table>";

	divResultado.innerHTML = salida;
}