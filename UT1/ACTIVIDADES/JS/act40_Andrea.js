"use strict";
/* 40. Programa una función para devolver la edad de una persona dada su fecha de nacimiento en
este formato dd/mm/aaa.*/

function calcularEdad(fechaNacimiento) {
    const [dia, mes, anio] = fechaNacimiento.split("/").map(Number);
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1;   
    let edad = anioActual - anio;
    if (mesActual < mes || (mesActual === mes && fechaActual.getDate() < dia)) {
        edad--;
    }
    return edad;
}

console.log(calcularEdad("15/06/1990")); // 36
console.log(calcularEdad("01/01/2000")); // 26
console.log(calcularEdad("16/04/1997")); // 29
console.log(calcularEdad("07/11/1999")); // 26