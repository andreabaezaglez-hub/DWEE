"use strict"
{
    /*Realiza un programa que al hacer doble click en la pantalla del navegador, cambie el
    fondo a un color aleatorio. */


    let randomNum = (min, max) =>{
        return Math.floor(Math.random() * (max - min) + min);
    };

    document.addEventListener("dblclick", (evento) =>{
        let r = randomNum(0, 256);
        let g = randomNum(0, 256);
        let b = randomNum(0, 256);

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}