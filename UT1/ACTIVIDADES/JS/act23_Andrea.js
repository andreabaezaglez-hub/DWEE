"use strict";
// 23. Programa una función que valide si una palabra o frase es un palíndromo (se lee igual en ambos sentidos).

function palindromo(palabra = "") {

  palabra = palabra.toLowerCase().replace(/[\s\/_]/g, "");
  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves;
}

// Pruebas
console.log(palindromo("Salas")); // true
