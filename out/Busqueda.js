"use strict";

$(function () {

	$("#formulariodebusqueda").submit(function (event) {
		event.preventDefault();
		realizarBusqueda();
	});
	$("#buscador").keyup(function (event) {
		realizarBusqueda();
	});
});

function realizarBusqueda() {
	var valorBusqueda = $("#buscador").val().trim();
	$.ajax({
		url: "servidor/datosBusqueda.php",
		data: { valor: valorBusqueda },
		method: "POST",
		dataType: "JSON",
		BeforeSend: function BeforeSend() {
			$("#spinner").css("display", "block");
		}
	}).done(resultadoBusqueda).fail(function () {
		alert("error");
		$("#resultado").html("error");
	});
	always(function () {
		$("#spinner").css("display", "none");
	});
}
function resultadoBusqueda(respuesta) {
	var divResultado = $("#resultado");
	divResultado.empty();
	var resultados = respuesta;
	var salida = "<table class='table' border='2'><tr><th>NOMBRE</th><th>nombrecientifico</th><th>tamaño</th><th>tipo</th></tr>";

	for (var i = 0; i < resultados.length; i++) {
		var objeto = resultados[i];
		salida += "<tr><td>" + objeto.nombre + "</td><td>" + objeto.nombrecientifico + "</td><td>" + objeto.tamaño + "</td><td>" + objeto.tipo + "</td></tr>";
	}

	salida += "</table>";

	divResultado.html(salida);
}
function functioncheck() {
	var checkBox = document.getElementById("Check");
	var text = document.getElementById("text");
	if (checkBox.checked == true) {
		text.style.display = "block";
	} else {
		text.style.display = "none";
	}
}

$(document).ready(function () {
	$("#resultadoBusqueda").html("<p>JQUERY VACIO</p>");
});

function buscar() {
	var textoBusqueda = $("input#busqueda").val();

	if (textoBusqueda != "") {
		$.post("buscar.php", { valorBusqueda: textoBusqueda }, function (mensaje) {
			$("#resultadoBusqueda").html(mensaje);
		});
	} else {
		$("#resultadoBusqueda").html("<p>JQUERY VACIO</p>");
	}
}