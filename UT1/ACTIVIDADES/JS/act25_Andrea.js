"use strict";
// 25. Programa una función que reciba un número y evalúe si es capicúa o no (se lee igual en ambos sentidos).ç

function numeroCapicua(numero = 0) {
  
  let strNumero = numero.toString();
  let alReves = strNumero.split("").reverse().join("");

  return strNumero === alReves;
}

// Pruebas
console.log(numeroCapicua(2002)); // true
console.log(numeroCapicua(1234)); // false
