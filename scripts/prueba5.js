$(function(){
	$("#nombre").keyup(function(event){
		validarNombre();
	});
	$("#nombre").change(function(event){
		validarNombre();
	});
	$("#tamaño").change(function(event){
		validarTamaño();
	});
	$("#nombrecientifico").keyup(function(event){
		validarNC();
	});
	$("#nombrecientifico").change(function(event){
		validarNC();
	});
	$("#viveSelect").change(function(event){
		validarVive();
	});
	$("#formCrear").submit(function(event){
		event.preventDefault();
		crearPez();
	});
    
});



function validarNombre(){
	let valorNombre = $("#nombre").val().trim();
	let camposAValidar ={};
	camposAValidar[$("#nombre").attr("name")]= valorNombre;
	$.ajax({
		url: "servidor/validarCampos.php",
		data:camposAValidar,
		method: "POST",
		dataType:"JSON",
	}).done(tratarValidacionNombre)
		.fail(function(){
			alert("ERROR EN LA PETICION");
			$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
		});
}

function tratarValidacionNombre(respuesta){
	let campoValido = false;
	let errores = respuesta.nombre;
	//Reseteamos el estilo del input y quitamos los errores 
	//antes de proceder a comprobar la validación
	$("#nombre").removeClass("bg-success bg-danger");
	$("#divErroresNombre").html("");
	if(!$.isEmptyObject(errores)){
		//Si tiene errores lo marcamos como erróneo y mostramos los errores
		$("#nombre").addClass("bg-danger");
		for(let error in errores){
			$("#divErroresNombre").append("<div>"+errores[error]+"</div>");
		}
	}else{
		$("#nombre").addClass("bg-success"); 
		campoValido = true;
	}
	return campoValido;
}


function validarNC(){
	let valorNC = $("#nombrecientifico").val().trim();
	let camposAValidar ={};
	camposAValidar[$("#nombrecientifico").attr("name")]= valorNC;
	$.ajax({
		url: "servidor/validarCampos.php",
		data:camposAValidar,
		method: "POST",
		dataType:"JSON",
	}).done(tratarValidacionNC)
		.fail(function(){
			alert("ERROR EN LA PETICION");
			$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
		});
}

function tratarValidacionNC(respuesta){
	let campoValido = false;
	let errores = respuesta.nombrecientifico;
	//Reseteamos el estilo del input y quitamos los errores 
	//antes de proceder a comprobar la validación
	$("#nombrecientifico").removeClass("bg-success bg-danger");
	$("#divErroresNC").html("");
	if(!$.isEmptyObject(errores)){
		//Si tiene errores lo marcamos como erróneo y mostramos los errores
		$("#nombrecientifico").addClass("bg-danger");
		for(let error in errores){
			$("#divErroresNC").append("<div>"+errores[error]+"</div>");
		}
	}else{
		$("#nombrecientifico").addClass("bg-success"); 
		campoValido = true;
	}
	return campoValido;
}

function validarVive(){
	let valorVive = $("#viveSelect").val().trim();
	let camposAValidar ={};
	camposAValidar[$("#viveSelect").attr("name")]= valorVive;
	$.ajax({
		url: "servidor/validarCampos.php",
		data:camposAValidar,
		method: "POST",
		dataType:"JSON",
	})  
		.done(tratarValidacionVive)
		.fail(function(){
			alert("ERROR EN LA PETICION");
			$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
		});
}

function tratarValidacionVive(respuesta){
	let campoValido = false;
	let errores = respuesta.viveSelect;
	//Reseteamos el estilo del input y quitamos los errores 
	//antes de proceder a comprobar la validación
	$("#viveSelect").removeClass("bg-success bg-danger");
	$("#divErroresVive").html("");
	if(!$.isEmptyObject(errores)){
		//Si tiene errores lo marcamos como erróneo y mostramos los errores
		$("#viveSelect").addClass("bg-danger");
		for(let error in errores){
			$("#divErroresVive").append("<div>"+errores[error]+"</div>");
		}
	}else{
		$("#viveSelect").addClass("bg-success"); 
		campoValido = true;
	}
	return campoValido;
}


function validarTamaño(){
	let valorTamaño = $("#tamaño").val().trim();
	let camposAValidar ={};
	camposAValidar[$("#tamaño").attr("name")]= valorTamaño;
	$.ajax({
		url: "servidor/validarCampos.php",
		data:camposAValidar,
		method: "POST",
		dataType:"JSON",
	}).done(tratarValidacionTamaño)
		.fail(function(){
			alert("ERROR EN LA PETICION");
			$("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICION");
		});
}
function tratarValidacionTamaño(respuesta){
	let campoValido = false;
	let errores = respuesta.tamaño;
	//Reseteamos el estilo del input y quitamos los errores 
	//antes de proceder a comprobar la validación
	$("#tamaño").removeClass("bg-success bg-danger");
	$("#divErrorestamaño").html("");
	if(!$.isEmptyObject(errores)){
		//Si tiene errores lo marcamos como erróneo y mostramos los errores
		$("#tamaño").addClass("bg-danger");
		for(let error in errores){
			$("#divErrorestamaño").append("<div>"+errores[error]+"</div>");
		}
	}else{
		$("#tamaño").addClass("bg-success"); 
		campoValido = true;
	}
}

function crearPez(){
	let camposCrear = {};
	let valorNombre = $("#nombre").val().trim();
	camposCrear[$("#nombre").attr("name")]= valorNombre;
	let valorVive = $("#viveSelect").val().trim();
	camposCrear[$("#viveSelect").attr("name")]= valorVive;
	let valorNC = $("#nombrecientifico").val().trim();
	camposCrear[$("#nombrecientifico").attr("name")]= valorNC;
	$.ajax({
		url: "servidor/crearPez.php",
		data:camposCrear,
		method: "POST",
		dataType: "JSON",
		BeforeSend:function(){$("#spinner").css("display","block");}
	})
		.done(crearTratacionPez)
		.fail(function(){
			alert("error");
			$("#resultado").html("error");
        
		}).
		always(function(){
			$("#spinner").css("display","none");
		});

}


function crearTratacionPez(respuesta){
	if(respuesta.correcto){
		let valorID = respuesta.idCreado;
		$.ajax({
			url: "servidor/mostrarPez.php",
			data:{id:valorID},
			method: "GET",
			dataType: "JSON",
			BeforeSend:function(){$("#spinner").css("display","block");}
		})
			.done(mostrarPez)
			.fail(function(){
				alert("error");
				$("#resultado").html("error");
            
			}).
			always(function(){
				$("#spinner").css("display","none");
			});
    
	}else{
		alert("Hay errores");
	}

}
function mostrarPez(respuesta){
	$("#listado").append(respuesta.pez);

}
    
        
        
    
       
   

