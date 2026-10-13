"use strict";
/*31. Programa una función que dada una fecha válida determine cuantos años han pasado hasta
el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”)*/

function miFuncion(fecha) {
  let nacimiento = new Date(fecha);
  let hoy = new Date();
  let anios = hoy.getFullYear() - nacimiento.getFullYear();

  if (
    hoy.getMonth() < nacimiento.getMonth() ||
    (hoy.getMonth() === nacimiento.getMonth() &&
      hoy.getDate() < nacimiento.getDate())
  ) {
    anios--;
  }

  return anios;
}

console.log(miFuncion(new Date(1984, 4, 23)));
console.log(miFuncion("2010-12-01"));