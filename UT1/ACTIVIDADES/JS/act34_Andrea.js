"use strict";
/* Programa una función que valide que un texto sea un email válido, p.e. miFuncion
(“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos
guión alto y bajo+@+caracteres, números+.+al menos dos caracteres.
*/
function validarEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

console.log(validarEmail("javier.ferrer@iesmartinezm.es")); // true
console.log(validarEmail("javier.ferrer@iesmartinezm")); // false
console.log(validarEmail("javier.ferrer@gmail.com")); // true