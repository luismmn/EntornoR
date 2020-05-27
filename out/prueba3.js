"use strict";

var procesos = [];

$(function () {

	$("#selectp").change(function () {
		obtenerDatosSelect();
	});

	$("#nombre").change(function () {
		validarDatos([$(this)], false);
	});

	$("#vive").change(function () {
		validarDatos([$(this)], false);
	});

	$("#tamaño").change(function () {
		validarDatos([$(this)], false);
	});

	$("#formularioActualizar").submit(function (event) {
		event.preventDefault();
		$("#boton").prop("disabled", true);
		$("#formularioActualizar input").prop("readOnly", true);
		validarDatos([$("#nombre"), $("#vive"), $("#tamaño")], true);
	});
});

function obtenerDatosSelect() {
	$("#spinner").css("display", "block");
	var form = new FormData();
	form.append("select", $("#selectP").val());
	fetch("datosSelect.php", {
		method: "post",
		body: form
	}).then(function (response) {
		return response.json();
	}).then(rellenarSelect).catch(function (err) {
		alert("ERROR EN LA PETICION");
		$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
	}).finally(function () {
		$("#spinner").css("display", "none");
	});
}

function rellenarSelect(respuesta) {
	var resultados = respuesta;
	var salida = "";
	for (var i = 0; i < resultados.length; i++) {
		var objeto = resultados[i];
		salida += "<option>" + objeto.nombre + "</option>";
	}

	document.getElementById("selectResultado").innerHTML = salida;
}

function validarDatos(listaInputs, ejecutarFormulario) {
	var form = new FormData();
	$("#spinner").css("display", "block");
	listaInputs.forEach(function (input) {
		return form.append(input.attr("id"), input.val());
	});
	fetch("validarDatos.php", {
		method: "POST",
		body: form

	}).then(function (response) {
		return response.json();
	}).then(function (errores) {
		document.getElementById("resultado").innerHTML = "";
		var todoCorrecto = true;
		for (inputName in errores) {
			var erroresInput = errores[inputName];
			$("#" + inputName).removeClass("inputCorrecto");
			$("#" + inputName).removeClass("inputErroneo");
			var divErrores = $("#" + inputName).next("div");
			divErrores.html("");
			if (!$.isEmptyObject(erroresInput)) {
				$("#" + inputName).addClass("inputErroneo");
				for (tipoError in erroresInput) {
					divErrores.append("<div>" + erroresInput[tipoError] + "</div>");
				}
				todoCorrecto = false;
				document.getElementById("resultado").innerHTML = "DEBE CORREGIR LOS ERRORES";
			} else {
				$("#" + inputName).addClass("inputCorrecto");
			}
		}

		if (todoCorrecto && ejecutarFormulario) {
			datosActualizar();
		}
	}).catch(function (err) {
		console.log(err);
		alert("ERROR EN LA PETICION");
		$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
	}).finally(function () {
		$("#spinner").css("display", "none");
	});
}

function datosActualizar() {
	var form = new FormData();
	form.append("selectPescaderia", $("#selectPescaderia").val());
	form.append("nombre", $("#nombre").val());
	form.append("vive", $("#vive").val());
	form.append("tipo", $("#tipo").val());
	form.append("tamaño", $("#tamaño").val());
	form.append("nombreciencifico", $("#nombreciencifico").val());
	fetch("datosActualizar.php", {
		method: "post",
		body: form
	}).then(function (response) {
		return response.json();
	}).then($("#resultado").html("DISTRIBUCIÓN ACTUALIZADA CORRECTAMENTE")).catch(function (err) {
		console.log(err);
		alert("ERROR EN LA PETICION");
		$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
	});
}