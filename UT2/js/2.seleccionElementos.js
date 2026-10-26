"use strict";

{
    /**
     * getElementsByTagName
     * getElementsByClassName
     * getElementsByName
     * getElementsById
     * querySelector
     * querySelectorAll
     */

    let listas = document.getElementsByTagName("ul");

    for (let elem of listas){
        console.log(elem);
        console.log(elem.textContent);
        let myArray1 = elem.textContent.split("\n");
        console.log(myArray1);
    }
    
    listas = document.getElementsByClassName("cListaVehiculos");
    for ( let elem  of listas){
        console.log(elem);
        console.log(elem.textContent);
    }

    listas = document.getElementsByName("nLista");
    for ( let elem  of listas){
        console.log(elem);
        console.log(elem.textContent);
    }

    listas.forEach(elem => {
         console.log(elem);
        console.log(elem.textContent);
    });

    let identificador = document.getElementById("idCiclomotores");


}