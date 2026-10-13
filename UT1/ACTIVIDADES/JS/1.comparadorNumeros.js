"use strict"

// 1. Dados dos números indicar cuál es mayor, menor o si son iguales.

let num1 = parseFloat(prompt("Introduce el primer número: "));
let num2 = parseFloat(prompt("Introduce el segundo número: "));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, introduce números válidos.");
} else if (num1 > num2) {
    console.log(`El número ${num1} es mayor que ${num2}.`);
} else if (num1 < num2) {
    console.log(`El número ${num1} es menor que ${num2}.`);
} else {
    console.log("Ambos números son iguales.");
}