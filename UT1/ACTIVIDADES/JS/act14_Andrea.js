"use strict";

/* 14. Programa una función que devuelva el monto final después de aplicar un descuento a una
cantidad dada, pe. miFuncion(1000, 20) devolverá 800*/

let calcularDescuento = (precio, descuento) =>{
    let aDescontar = precio*(descuento/100);
    return precio - aDescontar;
}

console.log(calcularDescuento(1000,20));