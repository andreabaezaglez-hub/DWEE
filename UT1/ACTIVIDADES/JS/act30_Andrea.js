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

// Hacer control de errores en el formato de la fecha de nacimiento
function validarFecha(fechaNacimiento) {
  let fechaNac = new Date(fechaNacimiento);
  if (isNaN(fechaNac.getTime())) {
    return "Formato de fecha no válido. Por favor, use el formato YYYY-MM-DD.";
  }
  return calcularEdad(fechaNacimiento);
}

// Pruebas
console.log(validarFecha("1995-05-15")); // Debería devolver la edad correcta
console.log(validarFecha("2000-19-10")); // Debería devolver un mensaje de error

