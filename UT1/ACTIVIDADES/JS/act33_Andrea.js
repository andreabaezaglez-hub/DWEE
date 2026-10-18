"use strict";
/*33.  Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier
Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como
¡ o ¿*/

function miFuncion(nombre) {
    return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);
}

console.log(miFuncion("Javier Ferrer")); // true
console.log(miFuncion("Javier Ferrer123")); // false
console.log(miFuncion("Manoli García")); // true
console.log(miFuncion("Manoli García!")); // false
console.log(miFuncion("Pepito33")); // false
console.log(miFuncion("Lola21 Flores")); // false
console.log(miFuncion("María José")); // true


