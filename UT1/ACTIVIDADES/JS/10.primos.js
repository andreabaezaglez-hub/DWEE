// 10. Programa una función que determine si un número es primo.
function esPrimo(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === n) return false; // Nota: optimización estándar de primos
    }
    // Corrección para comprobación limpia:
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}


let input = parseInt(prompt("Introduce un número para comprobar si es primo: "));
if (!isNaN(input)) {
    console.log(`¿El número ${input} es primo? ${esPrimo(input)}`);
}