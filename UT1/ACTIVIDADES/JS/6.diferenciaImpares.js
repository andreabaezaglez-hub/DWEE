// 6. Mostrar todos los números impares que hay entre dos números introducidos por el usuario.

let num1 = parseInt(prompt("Introduce el primer número: "));
let num2 = parseInt(prompt("Introduce el segundo número: "));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Introduce números válidos.");
} else {
    let inicio = Math.min(num1, num2);
    let fin = Math.max(num1, num2);
    
    console.log(`Números impares entre ${inicio} y ${fin}:`);
    let hayImpares = false;
    for (let i = inicio + 1; i < fin; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            hayImpares = true;
        }
    }
    if (!hayImpares) {
        console.log("No hay números impares entre ellos.");
    }
}