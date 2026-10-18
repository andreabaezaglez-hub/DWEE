"use strict";
/* 36. Programa una función que dado un array devuelva el número más alto y el más bajo de dicho array, 
p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60]*/

function obtenerMaxMin(array) {
    let mayor = Math.max(...array);
    let menor = Math.min(...array);
    return [mayor, menor];
}

console.log(obtenerMaxMin([1, 5, 34, 99, -2])); // [99, -2]
console.log(obtenerMaxMin([10, 20, 30, 40, 50])); // [50, 10]