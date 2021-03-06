"use strict";

$(function () {

	$("button[data-accion='eliminar']").on("click", function (event) {
		var boton = $(event.target);

		mostrarModalEliminar(boton.attr("data-idEliminar"));
	});

	$("button[data-accion='confirmar-eliminar']").on("click", function (event) {
		var boton = $(event.target);
		eliminarPez(boton.attr("data-idEliminar"));
	});
	$(".spin").spin("hide");
});

function mostrarModalEliminar(idEliminar) {
	$("#botonConfirmarEliminar").attr("data-ideliminar", idEliminar);
	$("#modalEliminar").modal("show");
}

function eliminarPez(idEliminar) {
	var form = new FormData();
	form.append("idPez", idEliminar);
	fetch("servidor/eliminarPez.php", {
		method: "POST",
		body: form
	}).then(function (res) {
		$("#spinner").css("display", "block");
		if (res.status == 200) {
			$("tr[data-idPez='" + idEliminar + "']").remove();
			$("#spinner").css("display", "none");
			$("#modalEliminar").modal("hide");
		} else {
			alert("Error: " + res.status);
		}
	});
}