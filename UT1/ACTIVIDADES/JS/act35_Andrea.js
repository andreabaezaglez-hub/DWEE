"use strict";
/* 35Programa una función que dado un array numérico devuelve otro array con los números
elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]*/

function elevarAlCuadrado(array) {
    return array.map(num => num ** 2);
}

console.log(elevarAlCuadrado([1, 4, 5])); // [1, 16, 25]
console.log(elevarAlCuadrado([2, 3, 6])); // [4, 9, 36]