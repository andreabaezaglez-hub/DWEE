"use strict";
/* 32. Programa una función que dada una cadena de texto cuente el número de vocales y
consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5*/

function miFuncion(cadena) {
  let vocales = 0;
  let consonantes = 0;
  let texto = cadena.toLowerCase();

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];

    if ("aeiouáéíóú".includes(letra)) {
      vocales++;
    } else if (letra >= "a" && letra <= "z" && !("aeiou".includes(letra))) {
      consonantes++;
    }
  }

  return "Vocales: " + vocales + ", Consonantes: " + consonantes;
}

console.log(miFuncion("Hola Mundo"));