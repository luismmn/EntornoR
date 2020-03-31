<<<<<<< HEAD
let listadoPescaderia = [];

document.addEventListener("DOMContentLoaded", function () {

  

    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup", validarNombre);

    let inputVive = document.getElementById("vive");
    inputVive.addEventListener("keyup", validarVive);

    let inputTamaño = document.getElementById("tamaño");
    inputTamaño.addEventListener("keyup", validarTamaño);

    let inputTipo = document.getElementById("tipo");
    inputTipo.addEventListener("click", validarTipo);

    let inputNombrecientifico = document.getElementById("nombrecientifico");
    inputNombrecientifico.addEventListener("click", validarNombrecientifico);

    let formulario = document.getElementById("formularioCrearPescado");
    formulario.addEventListener("submit", validarFormulario);
})


function mostrarPescaderia() {
    
    mostrarPescaderiaRefactorizados("listadoPescaderia", listadoPescaderia);
}

function mostrarPescaderiaRefactorizados(idDivMostrar, lista) {
    let divListadoPescaderia = document.getElementById(idDivMostrar);
    
    divListadoPescaderia.innerHTML = "";
    let ulPescaderia = document.createElement("ul");
    for (let pescado of lista) {
        let liPescaderia = document.createElement("li");
        liPescaderia.innerHTML = pescado.nombre;
        ulPescaderia.appendChild(liPescaderia);
    }
    divListadoPescaderia.appendChild(ulPescaderia);

}

