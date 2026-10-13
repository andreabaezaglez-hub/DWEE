"use strict";
// 21. Programa una función que invierta los caracteres de una cadena de texto.
// Ejemplo: miFuncion("Hola Mundo") devolverá "odnuM aloH".


function invertirCadena(cadena = "") {

  return cadena.split("").reverse().join("");
}

// Pruebas
console.log(invertirCadena("Hola Mundo")); // "odnuM aloH"
