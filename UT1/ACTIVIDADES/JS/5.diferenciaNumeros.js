// 5. Mostrar todos los números que hay entre dos números introducidos por el usuario.

let num1 = parseInt(prompt("Introduce el primer número: "));
let num2 = parseInt(prompt("Introduce el segundo número: "));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Introduce números válidos.");
} else {
    let inicio = Math.min(num1, num2);
    let fin = Math.max(num1, num2);
    
    console.log(`Números entre ${inicio} y ${fin}:`);
    for (let i = inicio + 1; i < fin; i++) {
        console.log(i);
    }
    if (fin - inicio <= 1) {
        console.log("No hay números enteros entre ellos.");
    }
}