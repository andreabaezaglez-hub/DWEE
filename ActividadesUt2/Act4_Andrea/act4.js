"use strict"
{
    /* Realiza un programa que tenga 3 elementos <p> y al hacer salir el puntero del ratón
    sobre ellos desaparezcan (se oculten) y al hacer doble clic (los elimine del DOM).
    También deberá tener un botón “Reaparecer” que hará que aparezcan todos los
    elementos desaparecidos (pero no los eliminados). */

    let divBoton = document.createElement("div");
    document.body.appendChild(divBoton);

    let boton = document.createElement("button");
    boton.textContent = "Reaparecer";
    document.body.appendChild(boton);

    divBoton.style.marginBottom = "20px";
    divBoton.style.display = "flex";
    divBoton.style.gap = "10px";


    let p1 = document.createElement("p");
    p1.textContent = "Parrafo 1";

    let p2 = document.createElement("p");
    p2.textContent = "Parrafo 2";

    let p3 = document.createElement("p");
    p3.textContent = "Parrafo 3";

    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);


    //Eventos para los elementos

    boton.addEventListener("click", (evento) => {
        let pes = document.querySelectorAll("p");

        pes.forEach((el) => el.style.opacity = "1");

    });


    p1.addEventListener("mouseout", (evento) => {
        p1.style.opacity = "0";

    });

    p1.addEventListener("dblclick", (evento) => {
        p1.remove();

    });

    p2.addEventListener("mouseout", (evento) => {
        p2.style.opacity = "0";
    });

    p2.addEventListener("dblclick", (evento) => {
        p2.remove();
    });

    p3.addEventListener("mouseout", (evento) => {
        p3.style.opacity = "0";
    });

    p3.addEventListener("dblclick", (evento) => {
        p3.remove();
    });






}

