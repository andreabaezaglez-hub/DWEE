"use script"
{
    //------------- FORM 1 ---------------------
    let formularioCompleto = document.querySelector("#idForm1");

    formularioCompleto.nTexto.value = "otro texto";

    formularioCompleto.nUrl.value = "otra url";



    //------------ FORM 2 ----------------------
    let inputText1 = document.querySelector("#idTexto1");
    console.log(inputText1);
    console.log(inputText1.value);
    inputText1.value = "otro valor para texto 1";
    console.log(inputText1.name);
    console.log(inputText1.getAttribute("name"));


    inputText1.addEventListener("input", (evento) => {
        //console.log(evento);
        console.log(evento.data);
        //console.log(evento.target);
        console.log(evento.target.value);
    });

    inputText1.addEventListener("change", (evento) => {
        //console.log(evento.data);
        //console.log(evento.target);
        console.log(evento.target.value);
    });

    let textArea1 = document.querySelector("#idTextArea1");
    console.log(textArea1.value);

    textArea1.oninput = function (evento) {
        console.log(evento.data);
        console.log(evento.target.value);
    };

    textArea1.onchange = (evento) => {
        console.log(evento.target.value);
    };

    let radioButtons = document.getElementsByName("nrbtn1");
    console.log(radioButtons.length);
    radioButtons.forEach(elemento => {
        console.log(elemento);
        console.log(elemento.value); //value
        console.log(elemento.previousElementSibling.value); //label

    });

    for (let elemento of radioButtons) {
        if (elemento.checked) {
            console.log(`El elemento elegido es ${elemento.value}`)
        }
    };


    for (let elemento of radioButtons) {
        elemento.addEventListener("change", (evento) => {
            console.log(elemento.value);
            console.log(this.value);
            console.log(elemento.target.value);
        })
    };


    //let checkboxes = document.querySelectorAll('input[name="comidas"]');
    let checkboxes = document.getElementsByName("comidas");

    console.log("Hay " + checkboxes.length + " comidas.");
    checkboxes.forEach(elemento => {
        console.log(elemento);
        console.log(elemento.value);
        console.log(elemento.previousElementSibling.textContent);
        if (elemento.checked) {
            console.log(`La opción marcada es ${elemento.value}`);
        };

        elemento.addEventListener("change", function (e) {
            if (elemento.checked) {
                console.log(`Pues voy a comer un ${elemento.previousElementSibling.textContent}`);
            } else {
                console.log(`Pues ya no voy a comer un ${elemento.previousElementSibling.textContent}`);
            };
        });
    });


    let seleccion = document.querySelector("#idLenguajes");
    console.log(seleccion);
    for (let elemento of seleccion) {
        console.log(elemento);
        console.log(elemento.value);
        console.log(elemento.textContent);

        if (elemento.selected) {
            console.log(`La opción seleccionada es ${elemento.value} y está en la posición ${seleccion.selectedIndex}`);
        };
    };

    Array.from(seleccion.options).forEach(elemento => {
        console.log(`El lenguaje elegido es ${elemento.value} y tiene el valor ${elemento.textContent}`);
    });

    console.log(seleccion.options[seleccion.selectedIndex].value);

    seleccion.addEventListener("change", function (e) {
        console.log(`El índice seleccionado es ${seleccion.selectedIndex}`);
        console.log("El valor del elemento seleccionado es " + seleccion.options[seleccion.selectedIndex].value);
        console.log("El texto del elemento seleccionado es " + seleccion.options[seleccion.selectedIndex].textContent);
    });

    //--------------- DATA LIST -----------------


    let listaDatos = document.querySelector("#idFrutas");

    Array.from(listaDatos.options).forEach(elemento => {
        console.log(elemento.value);
        console.log(elemento.textContent);
    });

    let cajaEntrada = document.querySelector("#idFrutas1");

    cajaEntrada.addEventListener("change", function (e) {
        console.log(cajaEntrada.value);
        console.log(e.target);

        let opcionSeleccionada = Array.from(listaDatos.options).find((e) => e.value === cajaEntrada.value);
        if (opcionSeleccionada !== undefined) {
            console.log(`${opcionSeleccionada.textContent}`);
        };
    });


}