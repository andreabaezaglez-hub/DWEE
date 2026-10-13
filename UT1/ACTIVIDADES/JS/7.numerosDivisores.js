// 7. Mostrar todos los números divisores de un número introducido por el usuario.

let num = parseInt(prompt("Introduce un número entero: "));

if (isNaN(num) || num === 0) {
    console.log("Introduce un número válido distinto de cero.");
} else {
    let absoluto = Math.abs(num);
    console.log(`Divisores de ${num}:`);
    for (let i = 1; i <= absoluto; i++) {
        if (absoluto % i === 0) {
            console.log(i);
        }
    }
}