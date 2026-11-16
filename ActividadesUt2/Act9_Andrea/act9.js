"use strict"
{
    let bolaPapel = document.querySelector(".bolaPapel");
    let contenedor = document.querySelector(".contenedor");
    let bolaArrastrada = 0;

    bolaPapel.addEventListener("dragstart", (evento) => {
        console.log("dragstart");
        bolaArrastrada = evento.target;
    });

    bolaPapel.addEventListener("drag", (evento) => {
        console.log("drag");
    });

    bolaPapel.addEventListener("dragend", (evento) => {
        console.log("dragend");
    });


    contenedor.addEventListener("dragenter", (evento) => {
        console.log("dragenter");
    });

    contenedor.addEventListener("dragleave", (evento) => {
        console.log("dragleave");
    });

    contenedor.addEventListener("dragover", (evento) => {
        evento.preventDefault();
        console.log("dragover");
    });

    contenedor.addEventListener("drop", (evento) => {
        console.log("drop");
        let papeleraVacia = document.querySelector(".papeleraVacia");
        contenedor.removeChild(papeleraVacia);
        let papeleraLLena = document.createElement("img");
        papeleraLLena.src = "./resources/papeleraLlena.png";
        contenedor.appendChild(papeleraLLena);

        bolaPapel.remove();
    });

}