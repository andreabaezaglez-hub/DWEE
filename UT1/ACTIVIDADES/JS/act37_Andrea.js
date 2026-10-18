"use strict";
/* 37. Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el
primero almacena los números pares y en el segundo los impares, pe.
miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}*/

function separarParesImpares(array){
    let pares = [];
    let impares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        } else {
            impares.push(array[i]);
        }          

    }
    return { pares: pares, impares: impares };
}

console.log(separarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // pares: [2,4,6,8,0], impares: [1,3,5,7,9]
console.log(separarParesImpares([10, 15, 20, 25, 30])); // pares: [10,20,30], impares: [15,25]


