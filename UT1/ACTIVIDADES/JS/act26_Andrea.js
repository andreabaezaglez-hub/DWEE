"use strict";
// 26. Comprueba que una cadena empieza con las letras "m" o "d" y termina con las letras "a" o "o".
// Realiza el ejercicio con funciones de cadena y con expresiones regulares.

function validarCadena(cadena = "") {
  // 1. Con funciones de cadena
  let minCadena = cadena.toLowerCase();
  let inicioFunc = minCadena.startsWith("m") || minCadena.startsWith("d");
  let finFunc = minCadena.endsWith("a") || minCadena.endsWith("o");
  
  console.log("--- Método Funciones de Cadena ---");
  console.log(`¿Empieza con 'm' o 'd'? ${inicioFunc}`);
  console.log(`¿Termina con 'a' o 'o'? ${finFunc}`);

  // 2. Con Expresiones Regulares
  let expReg = /^[md].*[ao]$/i;
  console.log("--- Método Expresión Regular ---");
  console.log(expReg.test(cadena));
}

// Pruebas
validarCadena("Mundo");
