"use strict";

/* 41. Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

let obtenerAleatorio = () => {
    return Math.floor(Math.random() * 100) + 501; // Tambien se puede hacer *(600 - 501 + 1)+501;
};

console.log(obtenerAleatorio());