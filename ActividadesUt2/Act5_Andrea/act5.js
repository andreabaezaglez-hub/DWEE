"use strict"
{
    /*Realiza un programa que mediante eventos y el uso del objeto event, te muestre en todo
    momento la posición actual del ratón en pantalla.
    Para mostrarlo modificaremos de forma dinámica un elemento HTML (Ejemplo, un <p>) que
    nos muestre la posición actual del ratón. */

    let miP1 = document.createElement("p");
    document.body.append(miP1);

    document.addEventListener("mousemove", function (evento) {
        console.log(evento);
        console.log(evento.x);
        console.log(evento.y);


        miP1.textContent = "Posición del ratón: X = " + evento.x + " Y = " + evento.y;
    });
}