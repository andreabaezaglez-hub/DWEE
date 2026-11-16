"use strict"
{
    let cajaS = document.querySelector(".cajaS");
    let cajaM = document.querySelector(".cajaM");
    let cajaL = document.querySelector(".cajaL");
    let main = document.querySelector(".main");
    let cajaArrastrada = 0;

    //Comportamiento de arrastre de la caja chica
    cajaS.addEventListener("dragstart", (evento) => {
        console.log("dragstart");
        cajaArrastrada = evento.target;
    });

    cajaS.addEventListener("drag", (evento) => {
        console.log("drag");
    });

    cajaS.addEventListener("dragend", (evento) => {
        console.log("dragend");
    });


    //Comportamiento de arrastre de la caja mediana
    cajaM.addEventListener("dragstart", (evento) => {
        console.log("dragstart");
        cajaArrastrada = evento.target;
    });

    cajaM.addEventListener("drag", (evento) => {
        console.log("drag");
    });

    cajaM.addEventListener("dragend", (evento) => {
        console.log("dragend");
    });

    //Comportamiento de la caja grande que recibe las otras cajas
    cajaL.addEventListener("dragenter", (evento) => {
        console.log("dragenter");
    });

    cajaL.addEventListener("dragleave", (evento) => {
        console.log("dragleave");
    });

    cajaL.addEventListener("dragover", (evento) => {
        evento.preventDefault();
        console.log("dragover");
    });

    cajaL.addEventListener("drop", (evento) => {
        evento.preventDefault();
        evento.stopPropagation();

        console.log("drop");
        cajaL.appendChild(cajaArrastrada);

        if (cajaL.children.length === 2) {
            cajaM.appendChild(cajaS);
        }
    });

    //Comportamiento de recepcion de la caja mediana
    cajaM.addEventListener("dragenter", (evento) => {
        console.log("dragenter");
    });

    cajaM.addEventListener("dragleave", (evento) => {
        console.log("dragleave");
    });

    cajaM.addEventListener("dragover", (evento) => {
        evento.preventDefault();
        console.log("dragover");
    });

    cajaM.addEventListener("drop", (evento) => {
        evento.preventDefault();
        evento.stopPropagation();

        console.log("drop");
        cajaM.appendChild(cajaS);
    });

    //Comportamiento de sacar las cajas 
    //Para poder sacar las cajas hay que tener en cuenta que si tenemos un evento en el elemento padre (en este caso la clase main) y otro en el evento hijo
    //al hacer drop en el contenedor hijo también lo estaríamos haciendo en el contenedor padre (esto se llama event bubbling) por lo que hay que controlar ese comportamiento
    //se controla añadiendo el método stopPropagation(), que evita que el evento se propague a los elementos padres
    //Se supone que también puede controlarse capturando los eventos con pasandole al addEvenListener la opción capture:true, pero ese no lo entiendo y no se si aplicaría a este caso
    //https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling

    main.addEventListener("dragenter", (evento) => {
        console.log("dragenter");
    });

    main.addEventListener("dragleave", (evento) => {
        console.log("dragleave");
    });

    main.addEventListener("dragover", (evento) => {
        evento.preventDefault();
        console.log("dragover");
    });

    main.addEventListener("drop", (evento) => {
        evento.preventDefault();
        evento.stopPropagation();

        console.log("drop");
        main.appendChild(cajaArrastrada);
    });

}