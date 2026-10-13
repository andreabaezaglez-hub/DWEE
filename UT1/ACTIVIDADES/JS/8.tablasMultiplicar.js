// 8. Mostrar la tabla de multiplicar de un número introducido por pantalla.

let num = parseFloat(prompt("Introduce un número para ver su tabla de multiplicar: "));

if (isNaN(num)) {
    console.log("Introduce un número válido.");
} else {
    console.log(`--- Tabla de multiplicar del ${num} ---`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}