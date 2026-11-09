"use strict"
{

    let miBoton = document.createElement("button");
    miBoton.setAttribute = ("id" , "idBoton");
    miBoton.textContent = "Nuevo número";
    document.body.appendChild(miBoton);

    let miBoton1 = document.createElement("button");
    miBoton1.setAttribute = ("id" , "idBoton1");
    miBoton1.textContent = "Borrar elemento";
    document.body.appendChild(miBoton1);


    let miLista = document.createElement("ul");
    miLista.setAttribute = ("id" , "idLista");
    document.body.appendChild(miLista);


    miBoton.addEventListener("click", function () {
        let numerin = Math.floor(Math.random() * 100) + 1;

        let elemLista = document.createElement("li");
        elemLista.textContent = numerin;
        miLista.appendChild(elemLista);
    })

    //No me da tiempo a hacer la funcion de borrar
}