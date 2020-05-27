"use strict";

$(function () {
	$("#nombre").keyup(function (event) {
		validarNombre();
	});
	$("#nombre").change(function (event) {
		validarNombre();
	});
	$("#tamaño").change(function (event) {
		validarTamaño();
	});
	$("#nombrecientifico").keyup(function (event) {
		validarNC();
	});
	$("#nombrecientifico").change(function (event) {
		validarNC();
	});
	$("#viveSelect").change(function (event) {
		validarVive();
	});
	$("#formCrear").submit(function (event) {
		event.preventDefault();
		crearPez();
	});
});

function validarNombre() {
	var valorNombre = $("#nombre").val().trim();
	var camposAValidar = {};
	camposAValidar[$("#nombre").attr("name")] = valorNombre;
	$.ajax({
		url: "servidor/validarCampos.php",
		data: camposAValidar,
		method: "POST",
		dataType: "JSON"
	}).done(tratarValidacionNombre).fail(function () {
		alert("ERROR EN LA PETICION");
		$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
	});
}

function tratarValidacionNombre(respuesta) {
	var campoValido = false;
	var errores = respuesta.nombre;
	//Reseteamos el estilo del input y quitamos los errores 
	//antes de proceder a comprobar la validación
	$("#nombre").removeClass("bg-success bg-danger");
	$("#divErroresNombre").html("");
	if (!$.isEmptyObject(errores)) {
		//Si tiene errores lo marcamos como erróneo y mostramos los errores
		$("#nombre").addClass("bg-danger");
		for (var error in errores) {
			$("#divErroresNombre").append("<div>" + errores[error] + "</div>");
		}
	} else {
		$("#nombre").addClass("bg-success");
		campoValido = true;
	}
	return campoValido;
}

function validarNC() {
	var valorNC = $("#nombrecientifico").val().trim();
	var camposAValidar = {};
	camposAValidar[$("#nombrecientifico").attr("name")] = valorNC;
	$.ajax({
		url: "servidor/validarCampos.php",
		data: camposAValidar,
		method: "POST",
		dataType: "JSON"
	}).done(tratarValidacionNC).fail(function () {
		alert("ERROR EN LA PETICION");
		$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
	});
}

function tratarValidacionNC(respuesta) {
	var campoValido = false;
	var errores = respuesta.nombrecientifico;
	//Reseteamos el estilo del input y quitamos los errores 
	//antes de proceder a comprobar la validación
	$("#nombrecientifico").removeClass("bg-success bg-danger");
	$("#divErroresNC").html("");
	if (!$.isEmptyObject(errores)) {
		//Si tiene errores lo marcamos como erróneo y mostramos los errores
		$("#nombrecientifico").addClass("bg-danger");
		for (var error in errores) {
			$("#divErroresNC").append("<div>" + errores[error] + "</div>");
		}
	} else {
		$("#nombrecientifico").addClass("bg-success");
		campoValido = true;
	}
	return campoValido;
}

function validarVive() {
	var valorVive = $("#viveSelect").val().trim();
	var camposAValidar = {};
	camposAValidar[$("#viveSelect").attr("name")] = valorVive;
	$.ajax({
		url: "servidor/validarCampos.php",
		data: camposAValidar,
		method: "POST",
		dataType: "JSON"
	}).done(tratarValidacionVive).fail(function () {
		alert("ERROR EN LA PETICION");
		$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
	});
}

function tratarValidacionVive(respuesta) {
	var campoValido = false;
	var errores = respuesta.viveSelect;
	//Reseteamos el estilo del input y quitamos los errores 
	//antes de proceder a comprobar la validación
	$("#viveSelect").removeClass("bg-success bg-danger");
	$("#divErroresVive").html("");
	if (!$.isEmptyObject(errores)) {
		//Si tiene errores lo marcamos como erróneo y mostramos los errores
		$("#viveSelect").addClass("bg-danger");
		for (var error in errores) {
			$("#divErroresVive").append("<div>" + errores[error] + "</div>");
		}
	} else {
		$("#viveSelect").addClass("bg-success");
		campoValido = true;
	}
	return campoValido;
}

function validarTamaño() {
	var valorTamaño = $("#tamaño").val().trim();
	var camposAValidar = {};
	camposAValidar[$("#tamaño").attr("name")] = valorTamaño;
	$.ajax({
		url: "servidor/validarCampos.php",
		data: camposAValidar,
		method: "POST",
		dataType: "JSON"
	}).done(tratarValidacionTamaño).fail(function () {
		alert("ERROR EN LA PETICION");
		$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
	});
}
function tratarValidacionTamaño(respuesta) {
	var campoValido = false;
	var errores = respuesta.tamaño;
	//Reseteamos el estilo del input y quitamos los errores 
	//antes de proceder a comprobar la validación
	$("#tamaño").removeClass("bg-success bg-danger");
	$("#divErrorestamaño").html("");
	if (!$.isEmptyObject(errores)) {
		//Si tiene errores lo marcamos como erróneo y mostramos los errores
		$("#tamaño").addClass("bg-danger");
		for (var error in errores) {
			$("#divErrorestamaño").append("<div>" + errores[error] + "</div>");
		}
	} else {
		$("#tamaño").addClass("bg-success");
		campoValido = true;
	}
}

function crearPez() {
	var camposCrear = {};
	var valorNombre = $("#nombre").val().trim();
	camposCrear[$("#nombre").attr("name")] = valorNombre;
	var valorVive = $("#viveSelect").val().trim();
	camposCrear[$("#viveSelect").attr("name")] = valorVive;
	var valorNC = $("#nombrecientifico").val().trim();
	camposCrear[$("#nombrecientifico").attr("name")] = valorNC;
	$.ajax({
		url: "servidor/crearPez.php",
		data: camposCrear,
		method: "POST",
		dataType: "JSON",
		BeforeSend: function BeforeSend() {
			$("#spinner").css("display", "block");
		}
	}).done(crearTratacionPez).fail(function () {
		alert("error");
		$("#resultado").html("error");
	}).always(function () {
		$("#spinner").css("display", "none");
	});
}

function crearTratacionPez(respuesta) {
	if (respuesta.correcto) {
		var valorID = respuesta.idCreado;
		$.ajax({
			url: "servidor/mostrarPez.php",
			data: { id: valorID },
			method: "GET",
			dataType: "JSON",
			BeforeSend: function BeforeSend() {
				$("#spinner").css("display", "block");
			}
		}).done(mostrarPez).fail(function () {
			alert("error");
			$("#resultado").html("error");
		}).always(function () {
			$("#spinner").css("display", "none");
		});
	} else {
		alert("Hay errores");
	}
}
function mostrarPez(respuesta) {
	$("#listado").append(respuesta.pez);
}