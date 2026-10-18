"use strict";
/* 39. Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi
Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true]*/

function eliminarDuplicados(array) {
    return [...new Set(array)];
}   

console.log(eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true])); // ["x", 10, 2, "10", true]
console.log(eliminarDuplicados([1, 2, 3, 2, 1, 4, 5])); // [1, 2, 3, 4, 5]