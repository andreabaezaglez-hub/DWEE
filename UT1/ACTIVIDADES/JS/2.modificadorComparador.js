// 2. Modifica el programa anterior: si los números no son un número o son menores o iguales a ceros, que los vuelva a pedir.


function pedirNumeroValido(mensaje) {
    let num;
    do {
        let input = prompt(mensaje);
        num = parseFloat(input);
        if (isNaN(num) || num <= 0) {
            console.log("Error: Debe ser un número válido mayor que cero. Inténtalo de nuevo.");
        }
    } while (isNaN(num) || num <= 0);
    return num;
}

let num1 = pedirNumeroValido("Introduce el primer número (> 0): ");
let num2 = pedirNumeroValido("Introduce el segundo número (> 0): ");

if (num1 > num2) {
    console.log(`El número ${num1} es mayor que ${num2}.`);
} else if (num1 < num2) {
    console.log(`El número ${num1} es menor que ${num2}.`);
} else {
    console.log("Ambos números son iguales.");
}