// 9. Realizar una pequeña calculadora con validación de datos.

function pedirNumero(mensaje) {
    let num;
    do {
        let input = prompt(mensaje);
        num = parseFloat(input);
        if (isNaN(num)) {
            console.log("Entrada no válida. Introduce un número.");
        }
    } while (isNaN(num));
    return num;
}

function pedirOperacion() {
    let op;
    do {
        op = prompt("Introduce una operación aritmética (+, -, *, /): ").trim();
        if (op !== '+' && op !== '-' && op !== '*' && op !== '/') {
            console.log("Operación no válida. Usa +, -, *, /");
        }
    } while (op !== '+' && op !== '-' && op !== '*' && op !== '/');
    return op;
}

let num1 = pedirNumero("Introduce el primer número: ");
let op = pedirOperacion();
let num2 = pedirNumero("Introduce el segundo número: ");

let resultado;
switch (op) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        if (num2 === 0) {
            resultado = "Error: División por cero no permitida.";
        } else {
            resultado = num1 / num2;
        }
        break;
}

console.log(`Resultado: ${num1} ${op} ${num2} = ${resultado}`);