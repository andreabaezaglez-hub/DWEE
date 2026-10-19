"use strict";

/* Programa una función que determine si un número es par o impar, pe. miFuncion(29)
devolverá Impar.*/

function esParOImpar(numero) {  
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

console.log(esParOImpar(29)); // Imprime "Impar"
console.log(esParOImpar(10)); // Imprime "Par"