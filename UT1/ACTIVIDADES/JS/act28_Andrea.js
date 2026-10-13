"use strict";
// 28. En un vector de cadenas, indicar:
// a) La cadena más corta.
// b) La cadena más larga.
// c) La cadena con más letras "a".
// d) Cuántas cadenas contienen la letra "b" y cuáles son.

function analizarVectorCadenas(vector = []) {
  const masCorta = vector.reduce((a, b) => a.length <= b.length ? a : b);
  const masLarga = vector.reduce((a, b) => a.length >= b.length ? a : b);

  const conMasA = vector.reduce((prev, curr) => {
    let countPrev = (prev.match(/a/gi) || []).length;
    let countCurr = (curr.match(/a/gi) || []).length;
    return countCurr > countPrev ? curr : prev;
  });

  const conB = vector.filter(c => /b/i.test(c));

  return {
    masCorta,
    masLarga,
    conMasA,
    conB: { cantidad: conB.length, elementos: conB }
  };
}

// Pruebas
console.log(analizarVectorCadenas(["banana", "pera", "manzana", "uva", "barco"]));
