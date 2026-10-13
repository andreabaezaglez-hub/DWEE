"use strict";
// 30. Programa una función para saber la edad de una persona, sabiendo su fecha de nacimiento.

function calcularEdad(fechaNacimiento = "") {
  let fechaNac = new Date(fechaNacimiento);
  let hoy = new Date();

  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  let mes = hoy.getMonth() - fechaNac.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
    edad--;
  }

  return `La persona tiene ${edad} años.`;
}

// Pruebas
console.log(calcularEdad("1995-05-15"));
