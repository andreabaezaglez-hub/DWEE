"use strict"

{
    console.time ("ya");
    let a = [[1,2,3], [4,5,6]];
    console.log ("Hola");
    console.log(a);
    console.table(a);
    console.timeEnd("ya");

    alert ("Mensaje" + " que puedo " + "concatenar");

    // let respuesta = confirm ("quieres cancelar tu suscripcion?");
    // console.log(respuesta);

    let otraRespuesta =  prompt ("Como te llamas?");
    console.log(otraRespuesta);

    /*
    si escape = null
    si aceptar sin escribir = cadena vacia
    si cancelar = null
    si cancelar con escrito = null
    si metes nombre y aceptas = nombre
    */

    let valorNumerico = parseInt (otraRespuesta); //En caso de que el input sea un número
    if (valorNumerico != NaN){
        console.log(valorNumerico)
    }
}