"use strict";

/* Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
miFuncion(0,"C") devolverá 32°F*/

function convertirGrados(valor, unidad) {
    if (unidad === "C") {
        return (valor * 9/5) + 32 + "°F";
    } else if (unidad === "F") {
        return (valor - 32) * 5/9 + "°C";
    } else {
        return "Unidad no válida. Usa 'C' para Celsius o 'F' para Fahrenheit.";
    }
}       

console.log(convertirGrados(0, "C")); // Imprime "32°F"
console.log(convertirGrados(32, "F")); // Imprime "0°C"
console.log(convertirGrados(100, "C")); // Imprime "212°F"