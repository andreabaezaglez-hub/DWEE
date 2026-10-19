"use strict";

/* 13. Programa una función que calcule el factorial de un número (El factorial de un entero positivo
n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.
miFuncion(5) devolverá 120.*/


let calcularFactorial = (numero) => {
    let numeroTemporal = 1;

    for (let i = numero; i > 1; i--){
        numeroTemporal = i *numeroTemporal;
    }
    return numeroTemporal;
}

console.log (calcularFactorial(5)); //120
