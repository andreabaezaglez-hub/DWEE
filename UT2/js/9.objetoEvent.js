"use strict"
{
    let boton5 = document.querySelector("#idBoton5");

    let miP1 = document.createElement("p");
    document.body.append(miP1);


    boton5.addEventListener("click", function (evento) {
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



    let mostrarMensaje = function (evento) {
        // console.log(evento.type);

        if (evento.type == "keyup") {
            console.log(evento.code);
            console.log(evento.key);
        } else if (evento.type == "click") {
            console.log(evento.x);
            console.log(evento.y);

            console.log(evento.clientX);
            console.log(evento.clientY);

            console.log(evento.screenX);
            console.log(evento.screenY);

            console.log(evento.button);
            console.log(evento.detail); //cantidad de clicks que haces
            console.log(evento.ctrlKey);
            console.log(evento.altKey);
            console.log(evento.shiftKey);
            console.log(evento.target); //elemento HTML
            console.log(evento.target.id);
            console.log(evento.target.name);
            console.log(evento.target.textContent);

        } else if (evento.type === "dblclick") {
            console.log("doble click");
            evento.target.textContent = "hoy es un dia lluvioso";
            this.textContent = "Hoy es martes";
            evento.target.setAttribute("class", "cColor");
            console.log(this);
        } else if (evento.type === "contextmenu") {
            evento.preventDefault();
            console.log("botón derecho");
        }


        boton5.addEventListener("keyup", (evento) => mostrarMensaje);
        boton5.addEventListener("click", mostrarMensaje);
        boton5.addEventListener("dblclick", mostrarMensaje);
        boton5.addEventListener("contextmenu", mostrarMensaje, { once: true }); //para que solo se capture el evento una vez
        boton5.addEventListener("contextmenu", function () {
            console.log("click con el botón derecho");
        }, { capture: true }); //para que se ejecute el primmero cuando se captura varias veces


        /**
     * LISTA DE EVENTOS:
     *  onfocus: al obtener un foco. 
        onblur: al salir del foco de un elemento.
        onchange: al hacer un cambio en un elemento.
        onclick: al hacer un click en el elemento.
        ondblclick: al hacer doble click en un elemento.
        onkeydown: al pulsar una tecla (sin soltarla).
        onkeyup: al soltar una tecla pulsada.
        onkeypress: al pulsar una tecla.
        onload: al cargarse una página.
        onunload: al descargarse una página (salir de ella).
        onmousedown: al hacer clic de ratón (sin soltarlo).
        onmouseup: al soltar el botón del ratón previamente pulsado.
        onmouseover: al entrar encima de un elemento con el ratón.
        onmouseout: al salir de encima de un elemento con el ratón.
        onsubmit: al enviar los datos de un formulario.
        onreset: al resetear los datos de un formulario.
        onselect: al seleccionar un texto.
        onresize: al modificar el tamaño de la página del navegador. 
        contextmenu: al hacer click con el botón derecho.
     */
        
    }


}