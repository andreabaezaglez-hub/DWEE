"use strict";
// 29. Programa una función para convertir números de base binaria a decimal y viceversa.

function convertirBase(numero = null, base = null) {
  if (base === 2) {
    let decimal = parseInt(numero.toString(), 2);
    return `${numero} base 2 = ${decimal} base 10`;
  } else if (base === 10) {
    let binario = Number(numero).toString(2);
    return `${numero} base 10 = ${binario} base 2`;
  } else {
    return "Base no soportada (use 2 o 10)";
  }
}

// Pruebas
console.log(convertirBase(100, 2)); // 100 base 2 = 4 base 10
console.log(convertirBase(4, 10));  // 4 base 10 = 100 base 2
