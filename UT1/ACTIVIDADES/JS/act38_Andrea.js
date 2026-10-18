"use strict";
/* 38. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma
descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] } */

function ordenarAscDesc(array) {
    let asc = [...array].sort((a, b) => a - b); //también se puede hacer con array.slice().sort((a, b) => a - b)
    let desc = [...array].sort((a, b) => b - a);
    return { asc: asc, desc: desc };
}

console.log(ordenarAscDesc([7, 5, 7, 8, 6])); // asc: [5,6,7,7,8], desc: [8,7,7,6,5]
console.log(ordenarAscDesc([10, 2, 5, 1, 9])); // asc: [1,2,5,9,10], desc: [10,9,5,2,1]
