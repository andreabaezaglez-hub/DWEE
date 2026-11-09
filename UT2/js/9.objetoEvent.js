"use strict"
{
    let boton5 = document.querySelector("#idBoton5");

    let miP1 = document.createElement("p");
    document.body.append(miP1);
    

    boton5.addEventListener("click", function(evento){
        console.log(evento);
        console.log(evento.button);
        console.log(evento.x);
        console.log(evento.y);
        console.log(evento.clientX);
        console.log(evento.clientY);
        console.log(evento.offsetX);
        console.log(evento.offsetY);


        miP1.textContent = "X = " + evento.x + " Y = " + evento.y;
    });


}