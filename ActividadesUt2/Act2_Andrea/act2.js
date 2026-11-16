"use strict"
{

    let boton = document.createElement("button");
    boton.setAttribute("id", "idBoton");
    boton.textContent = "Calcular primos";
    document.body.appendChild(boton);

    let boton1 = document.createElement("button");
    boton1.setAttribute("id", "idBoton1");
    boton1.textContent = "Borrar primos";
    document.body.appendChild(boton1);


    let tabla = document.createElement("table");
    tabla.setAttribute("id", "idTabla");
    tabla.style.borderCollapse = "collapse";

    let numero = 1;
    const numFilas = 10;
    const numCeldas = 10;


    //bucle anidado para crear tabla y añadir numeros a cada celda
    for (let i = 0; i < numFilas; i++) {

        let fila = document.createElement("tr");

        for (let j = 0; j < numCeldas; j++) {
            let celda = document.createElement("td");

            celda.textContent = numero;

            fila.appendChild(celda); //el appendchild añade la celda a la fila

            numero++;

            celda.style.border = "1px solid black";
            celda.style.padding = "5px";
        }

        tabla.appendChild(fila);
    }


    document.body.appendChild(tabla);


    //funcion para calcular los numeros primos
    function esPrimo(numero) {

        let primo = true;

        if (numero <= 1) {
            primo = false;
        } else {

            for (let i = 2; i < numero; i++) {

                if (numero % i == 0) {
                    primo = false;
                }
            }
        }

        return primo;
    }


    //botón de clcular primos y pintarlos
    boton.addEventListener("click", function () {

        let celdas = document.querySelectorAll("td");

        celdas.forEach(function (celda) {

            let num = parseInt(celda.textContent);

            if (esPrimo(num)) {

                celda.className = "numPrimo";
            }
        })

    })

    //boton de borrar el pintado
    boton1.addEventListener("click", function () {

        let celdas = document.querySelectorAll("td");

        celdas.forEach(function (celda) {
            celda.className = "numNormal";
        })
    })
}