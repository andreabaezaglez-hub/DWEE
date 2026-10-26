"use strict";
/* 32. Programa una función que dada una cadena de texto 
cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5*/

function miFuncion(cadena) {
  let vocales = 0;
  let consonantes = 0;
  let texto = cadena.toLowerCase();
  let exprVocales = new RegExp(/[aeiouáéíóú]+/);
  let exprCons = new RegExp(/[a-zñ]+/);

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];

    if (exprVocales.test(letra)) vocales++
    else if (exprCons.test(letra)) consonantes++;
    
  }

  return "Vocales: " + vocales + ", Consonantes: " + consonantes;
}

console.log(miFuncion("Hola Mundo"));
