"use strict";
/* 27. En un vector de números, indicar:
 a) El número de elementos del vector.
 b) Cuántos son pares e impares y cuáles son.
 c) La suma de todos los números negativos.
 d) El producto de todos los números positivos.
 e) Cuántos son primos y cuáles son.
 f) Los números que ocupan las posiciones pares del vector.
 g) El número mayor.
 h) El número menor.
 i) La media de todos los números y los números que están por encima y por debajo.
 j) El vector ordenado de mayor a menor y viceversa.
 k) Buscar un valor introducido por el usuario e indicar si existe o no.*/



let v = [2, -3, 4, 7, 0, 11, -5, 8];

// a) Cantidad de elementos
console.log("a)", v.length);

// b) Pares e impares
console.log("b) Pares:", v.filter(n => n % 2 === 0));
console.log("Impares:", v.filter(n => n % 2 !== 0));

// c) Suma de negativos
console.log("c)", v.filter(n => n < 0).reduce((a, b) => a + b, 0));

// d) Producto de positivos
console.log("d)", v.filter(n => n > 0).reduce((a, b) => a * b, 1));

// e) Números primos
let primos = v.filter(n => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++)
        if (n % i === 0) return false;
    return true;
});
console.log("e)", primos.length, primos);

// f) Posiciones pares (2, 4, 6...)
console.log("f)", v.filter((n, i) => (i + 1) % 2 === 0));

// g) Mayor
console.log("g)", Math.max(...v));

// h) Menor
console.log("h)", Math.min(...v));

// i) Media y números por encima y debajo
let media = v.reduce((a, b) => a + b, 0) / v.length;
console.log("i) Media:", media);
console.log("Por encima:", v.filter(n => n > media));
console.log("Por debajo:", v.filter(n => n < media));

// j) Ordenar
console.log("j) Ascendente:", [...v].sort((a, b) => a - b));
console.log("Descendente:", [...v].sort((a, b) => b - a));

// k) Buscar número

let buscar = prompt ("Introduce un valor: ")
if (v.includes(buscar)){
    console.log("El número ${buscar} se encuentra en ${v}")
}else{
    console.log("El número ${buscar} no se encuentra en ${v}")
}

