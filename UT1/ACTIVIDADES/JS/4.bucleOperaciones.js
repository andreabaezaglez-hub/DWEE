// 4. Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos hasta introducir un número negativo y entonces mostrar el resultado.

let suma = 0;
let producto = 1;
let contador = 0;
let hayNumeros = false;

console.log("Introduce números (introduce un número negativo para terminar):");

while (true) {
    let num = parseFloat(prompt("Número: "));
    if (isNaN(num)) {
        console.log("Por favor, introduce un número válido.");
        continue;
    }
    if (num < 0) {
        break;
    }
    
    suma += num;
    if (!hayNumeros) {
        producto = num;
        hayNumeros = true;
    } else {
        producto *= num;
    }
    contador++;
}

if (contador > 0) {
    let media = suma / contador;
    console.log(`--- Resultados ---`);
    console.log(`Suma: ${suma}`);
    console.log(`Producto: ${producto}`);
    console.log(`Media: ${media}`);
} else {
    console.log("No se introdujeron números válidos.");
}