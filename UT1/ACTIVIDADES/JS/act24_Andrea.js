"use strict";
// 24. Programa una función que elimine cierto patrón de caracteres de un texto dado.

function eliminarCaracteres(texto = "", patron = "") {
  
  return texto.replace(new RegExp(patron, "ig"), "");
}

// Pruebas
console.log(eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")); // "1, 2, 3, 4 y 5."
