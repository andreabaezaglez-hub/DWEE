"use strict"
{

    let formulario = document.querySelector("#idForm");

    formulario.addEventListener("submit", function (e){
        e.preventDefault();
        alert("funciona");
    })
}