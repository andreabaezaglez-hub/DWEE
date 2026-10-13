"use strict"

{
    function cuentaAtras1(n) {
        //caso base
        if (n === 0) {
            console.log(n);

        } else { //recursiva
            console.log(n);
            cuentaAtras1(n - 1);
        }
    }

    cuentaAtras1(10);

    let cuentaAtras2 = function (n) {
        //caso base
        if (n === 0) {
            console.log(n);

        } else {
            console.log(n);
            cuentaAtras2(n - 1);
        }
    }

    let sumar2 = (n1, n2) => n1 + n2;

    let cuentaAtras3 = (n) => {
        if (n === 0) {
            console.log(n);

        } else {
            console.log(n);
            cuentaAtras3(n - 1);
        }
    }

    let sumaAtras = (n) => {
        if (n === 0) {
            return 0;
        } else {
            return n + sumaAtras(n - 1);
        }
    }

    let s = sumaAtras(4);
    console.log('La sumaAtras es $(s)');

    // FUNCION QUE ME ESCRIBE POR CONSOLA SI EL NUMERO ES PAR O IMPAR.
    let parImpar = (n) => {
        if (n === 0) {
            console.log("Par");
        } else if (n === 1) {
            console.log("Impar");
        } else {
            parImpar(n - 2);
        }

    }


    //FUNCION QUE ME DEVUELVA UN STRING CON LA PALABRA PAR O IMPAR DEPENDIENDO DE SU EL NÚMERO DE ENTRADA ES PAR O IMPAR

    let parImpar2 = (n) => {

        if (n === 0) {
            return ("Par");
        } else if (n === 1) {
            return ("Impar");
        } else {
            return parImpar2(n - 2);
        }
    }
}