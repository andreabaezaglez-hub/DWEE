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


    inputText1.addEventListener("input", (evento) =>{
        //console.log(evento);
        console.log(evento.data);
        //console.log(evento.target);
        console.log(evento.target.value);
    });

    inputText1.addEventListener("change", (evento) =>{
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
    radioButtons.forEach(elemento =>{
        console.log(elemento);
        console.log(elemento.value); //value
        console.log(elemento.previousElementSibling.value); //label

    });

    for (let elemento of radioButtons){
        if(elemento.checked){
            console.log(`El elemento elegido es ${elemento.value}`)
        }
    }

    //--------------- FORM 3 -----------------
}