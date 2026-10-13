"use strict";
// 22. Programa una función para contar el número de veces que se repite una palabra en un texto largo.

function contarPalabra(cadena = "", palabra = "") {
  
  let contador = 0;
  let arr = cadena.toLowerCase().split(" ");

  for (let el of arr) {
    if (el === palabra.toLowerCase()) {
      contador++;
    }
  }

  return `La palabra "${palabra}" se repite ${contador} veces.`;
}

// Pruebas
console.log(contarPalabra("hola mundo adios mundo", "mundo")); // 2
