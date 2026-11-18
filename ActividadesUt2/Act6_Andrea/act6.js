"use strict"
{
    /*Realiza un programa con dos botones “Comenzar Saludos” y “Parar Saludos”. Al hacer
    click en “Comenzar Saludos”, lance un setInterval que cada 5 segundos muestra un
    “alert” con “Hola”. El botón “Parar Saludos” parará esa secuencia*/



    let botonInicio = document.createElement("button");
    botonInicio.textContent = "Comenzar Saludos";
    document.body.appendChild(botonInicio);

    let botonStop = document.createElement("button");
    botonStop.textContent = "Parar Saludos";
    document.body.appendChild(botonStop);

    let intervalo = 0;

    botonInicio.addEventListener("click", (evento) => {
        intervalo = setInterval(() => {
            alert("Hola")
        }, 5000);

    });

    botonStop.addEventListener("click", (evento) =>{
        clearInterval(intervalo);
    });
}