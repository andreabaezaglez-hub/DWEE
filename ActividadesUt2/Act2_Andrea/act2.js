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
    document.body.appendChild(tabla);

    let numero = 1;

    for (let i = 0; i < 100; i++) {

        let fila = document.createElement("tr");

        for (let j = 0; j < 100; j++) {
            let celda = document.createElement("td");

            celda.textContent = numero;

            fila.appendChild(celda); //el appendchild añade la celda a la fila

            numero++;

            celda.style.border = "1px solid black";
        }

        tabla.appendChild(fila);
    }


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

    boton.addEventListener("click", function () {

        let celdas = document.querySelectorAll("td");

        celdas.forEach(function(celda){

            let num = parseInt(celda.textContent);

            if (esPrimo(num)) {

                celda.style.backgroundColor = "yellow";
            }
        })

    })

    boton1.addEventListener("click", function(){
        
        let celdas = document.querySelectorAll("td");

        celdas.forEach(function(celda){
            celda.style.backgroundColor = "";
        })
    })
}