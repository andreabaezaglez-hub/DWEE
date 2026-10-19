"use strict";
// 28. En un vector de cadenas, indicar:
// a) La cadena más corta.
// b) La cadena más larga.
// c) La cadena con más letras "a".
// d) Cuántas cadenas contienen la letra "b" y cuáles son.

function analizarMasCorta(cadena) {
  let masCorta = cadena[0];
  for (let i = 1; i < cadena.length; i++) {
    if (cadena[i].length < masCorta.length) {
      masCorta = cadena[i];
    }
  }
  return masCorta;
}

function analizarMasLarga(cadena) {
  let masLarga = cadena[0];
  for (let i = 1; i < cadena.length; i++) {
    if (cadena[i].length > masLarga.length) {
      masLarga = cadena[i];
    }
  }
  return masLarga;
}

function analizarMasA(cadena) {
  let masA = cadena[0];
  let maxA = (masA.match(/a/g) || []).length;
  for (let i = 1; i < cadena.length; i++) {
    let countA = (cadena[i].match(/a/g) || []).length;
    if (countA > maxA) {
      masA = cadena[i];
      maxA = countA;
    }
  }
  return masA;
}

function analizarContieneB(cadena) {
  let contieneB = [];
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i].includes("b")) {
      contieneB.push(cadena[i]);
    }
  }
  return contieneB;
}

// Pruebas
let cadenas = ["manzana", "banana", "pera", "kiwi", "uva", "cereza"];
console.log("Cadena más corta:", analizarMasCorta(cadenas)); // kiwi
console.log("Cadena más larga:", analizarMasLarga(cadenas)); // banana
console.log("Cadena con más 'a':", analizarMasA(cadenas)); // banana
console.log("Cadenas que contienen 'b':", analizarContieneB(cadenas)); // ["