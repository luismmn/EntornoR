

$(function () {

	$("#nombreEditar").change(function () {
		validarDatosEditar([$(this)], false);
	});

	$("#tipoEditar").change(function () {
		validarDatosEditar([$(this)], false);
	});

	$("#NCEditar").change(function () {
		validarDatosEditar([$(this)], false);
	});

	$("#tamañoEditar").change(function () {
		validarDatosEditar([$(this)], false);
	});

	$("#viveEditar").change(function () {
		validarDatosEditar([$(this)], false);
	});


	$("#formularioEditar").submit(function (event) {
		event.preventDefault();
		$("#botonActualizar").prop("disabled", true);
		$("#formularioActualizar input").prop("readOnly", true);
		validarDatosEditar([$("#nombreEditar"), $("#tipoEditar"), $("#NCEditar"), $("#tamañoEditar"), $("#viveEditar")], true);
	});


});

function validarDatosEditar(listaInputs, ejecutarFormulario) {
	let datosFormulario = $("#formularioEditar").serializeArray();
	let form = new FormData();
	$("#spinner").css("display", "block");

	//form.append("prueba","valor1");
	//console.log(datosFormulario);
	datosFormulario.forEach(
		campo => form.append(campo.name, campo.value)
	);
	//let datosForm = $("#formularioEditar").serialize();

	fetch("servidor/validarDatosEditar.php", {
		method: "POST",
		body: form
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (errores) {
			document.getElementById("divResultadoEditar").innerHTML = "";
			let todoCorrecto = true;
			for (inputName in errores) {
				let erroresInput = errores[inputName];
				$(`#${inputName}`).removeClass("bg-success");
				$(`#${inputName}`).removeClass("bg-danger");
				let divErrores = $(`#${inputName}`).next("div");
				divErrores.html("");
				if (!$.isEmptyObject(erroresInput)) {
					$(`#${inputName}`).addClass("bg-danger");
					for (tipoError in erroresInput) {
						divErrores.append(`<div>${erroresInput[tipoError]}</div>`);
					}
					todoCorrecto = false;
					document.getElementById("divResultadoEditar").innerHTML = "<p class='text-danger'>DEBE CORREGIR LOS ERRORES<p/>";

				} else {
					$(`#${inputName}`).addClass("bg-success");
				}
			}

			if (todoCorrecto && ejecutarFormulario) {
				datosActualizar();
			}
		})
		.catch(function (err) {
			console.log(err);
			alert("ERROR EN LA PETICION");
			$("#divResultadoEditar").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
		}).finally(function () {
			$("#spinner").css("display", "none");
		});
}

function datosActualizar() {
	let form = new FormData();
	form.append("nombreEditarSelect", $("#nombreEditarSelect").val());
	form.append("nombreEditar", $("#nombreEditar").val());
	form.append("tipoEditar", $("#tipoEditar").val());
	form.append("NCEditar", $("#NCEditar").val());
	form.append("tamañoEditar", $("#tamañoEditar").val());
	form.append("viveEditar", $("#viveEditar").val());
	fetch("servidor/datosActualizar.php", {
		method: "POST",
		body: form

	})
		.then(function (response) {
			return response.json();
		})
		.then(function () {
			$("#divResultadoEditar").html("<p>pescado a editar</p><h3 class='my-3'>nuevo pescado</h3><table table class='table table-striped table-hover' id='tablaMostrar'><thead><tr><th scope='col'>Nombre</th><th scope='col'>NC</th><th scope='col'>vive</th><th scope='col'>tamaño</th><th scope='col'>tipo</th></tr></thead><tbody><tr><td>" + form.get("nombreEditar") + "</td><td>" + form.get("NCEditar") + "</td><td>" + form.get("viveEditar") + "</td><td>" + form.get("tamañoEditar") + "</td><td>" + form.get("tipoEditar") + "</td></tr></tbody></table>");
			let nombreAntiguo = document.getElementById("nombreEditarSelect").value;
			let nombreNuevo = document.getElementById("nombreEditar").value;
			$("#" + nombreAntiguo).text(nombreNuevo);
			$("#" + nombreAntiguo).val(nombreNuevo);
			$("#" + nombreAntiguo).prop("id", nombreNuevo);

		})
		.catch(function (err) {
			console.log(err);
			alert("ERROR EN LA PETICION");
			$("#divResultadoEditar").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
		});
}
