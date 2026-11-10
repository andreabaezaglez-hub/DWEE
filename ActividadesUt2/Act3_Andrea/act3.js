"use strict"
{
    // Div para los botones
    let botones = document.createElement("div");
    document.body.appendChild(botones);

    let botonMarcar = document.createElement("button");
    botonMarcar.textContent = "Marcar todos";
    botones.appendChild(botonMarcar);

    let botonDesmarcar = document.createElement("button");
    botonDesmarcar.textContent = "Desmarcar todos";
    botones.appendChild(botonDesmarcar);

    botones.style.marginBottom = "20px";
    botones.style.display = "flex";
    botones.style.gap = "10px";


    // Div para contener los checkbox
    let contenedor = document.createElement("div");
    document.body.appendChild(contenedor);

    contenedor.style.display = "grid";
    contenedor.style.gridTemplateColumns = "repeat(10, 50px)";
    contenedor.style.gap = "10px";


    for (let i = 0; i < 100; i++) {

        let aleatorio = Math.floor(Math.random() * 101) + 100;

        let check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.setAttribute("id", "idCheck" + i);
        check.setAttribute("value", aleatorio);

        let num = document.createElement("label");
        num.setAttribute("for", "idCheck" + i);
        num.textContent = i;


        // Div individual para cada checkbox
        let grupo = document.createElement("div");

        grupo.appendChild(check);
        grupo.appendChild(num);

        contenedor.appendChild(grupo);


        check.addEventListener("change", function () {

            if (check.checked) {
                console.log("check" + check.value + " marcado");
            } else {
                console.log("check" + check.value + " desmarcado");
            }
        });

    }


    botonMarcar.addEventListener("click", function() {

        let checks = document.querySelectorAll("input[type=checkbox]");

        checks.forEach(function(check) {
            check.checked = true;
            check.dispatchEvent(new Event("change"));
        });

    });


    botonDesmarcar.addEventListener("click", function() {

        let checks = document.querySelectorAll("input[type=checkbox]");

        checks.forEach(function(check) {
            check.checked = false;
            check.dispatchEvent(new Event("change"));
        });

    });

}