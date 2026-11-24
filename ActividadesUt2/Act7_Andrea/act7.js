"use strict"
{
    /*Realiza un programa que cuando se presione una tecla, calcule cuántos DNIs de 4 cifras
    (del 0001 al 9999) tienen esa letra y te mostrará los DNIs y sus letras en un elemento
    HTML(Ejemplo un <p> y una lista desplegable) .*/


    const letrasDNI = [
        'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'
    ];


    let miP = document.createElement("p");

    let miLista = document.createElement("select");
    miLista.setAttribute = ("id", "idLista");
    

    document.addEventListener("keydown", (evento) => {
        console.log(evento.key);
        let letra = evento.key.toUpperCase();

        let pos = letrasDNI.indexOf(letra);


        miP.textContent = letra;
        document.body.appendChild(miP);
        document.body.appendChild(miLista);

        for (let i = 1; i < 10000; i++) {

            if (i % 23 === pos) {

                if (i < 10) {
                    let elemLista = document.createElement("option");
                    elemLista.textContent = "000" + i + letra;
                    miLista.appendChild(elemLista);
                } else if (i < 100) {
                    let elemLista = document.createElement("option");
                    elemLista.textContent = "00" + i + letra;
                    miLista.appendChild(elemLista);
                } else if (i < 1000) {
                    let elemLista = document.createElement("option");
                    elemLista.textContent = "0" + i + letra;
                    miLista.appendChild(elemLista);
                } else {
                    let elemLista = document.createElement("option");
                    elemLista.textContent = i + letra;
                    miLista.appendChild(elemLista);
                }

            }
        };
    });


}