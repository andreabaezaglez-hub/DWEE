"use strict"
{
    let cajaS = document.querySelector(".cajaS");
    let cajaM = document.querySelector(".cajaM");
    let cajaL = document.querySelector(".cajaL");
    let cajaArrastrada = 0;

    cajaS.addEventListener("dragstart", (evento) =>{
        console.log("dragstart");
        cajaArrastrada = evento.target;
    });

    cajaS.addEventListener("drag", (evento) =>{
        console.log("drag");
    });

    cajaS.addEventListener("dragend", (evento) =>{
        console.log("dragend");
    });


    cajaM.addEventListener("dragstart", (evento) =>{
        console.log("dragstart");
        cajaArrastrada = evento.target;
    });

    cajaM.addEventListener("drag", (evento) =>{
        console.log("drag");
    });

    cajaM.addEventListener("dragend", (evento) =>{
        console.log("dragend");
    });

        
    
    cajaL.addEventListener("dragstart", (evento) =>{
        console.log("dragstart");
        cajaArrastrada = evento.target;
    });

    cajaL.addEventListener("drag", (evento) =>{
        console.log("drag");
    });

    cajaL.addEventListener("dragend", (evento) =>{
        console.log("dragend");
    });


    contenedor.addEventListener("dragenter", (evento) =>{
        console.log("dragenter");
    });

    contenedor.addEventListener("dragleave", (evento) =>{
        console.log("dragleave");
    });

    contenedor.addEventListener("dragover", (evento) =>{
        evento.preventDefault();
        console.log("dragover");
    });

    contenedor.addEventListener("drop", (evento) =>{
        console.log("drop");
        //contenedor.appendChild(cajaArrastrada);
        contenedor.insertAdjacentElement("afterbegin", cajaArrastrada);
        
        if(contenedor.children.length===2){
            let miH1 = document.createElement("h1");
            miH1.textContent = "¡Felicidades!";
            contenedor.insertAdjacentElement("afterend", miH1);
        }
    });

}