"use strict";

{

    console.log(window);
    console.log(window.document);
    console.log(window.document.documentElement);
    console.log(document.documentElement);
    console.log(document.head);
    console.log(document.body);
    console.log(document.doctype);
    console.log(document.characterSet);
    console.log(document.title);
    console.log(document.documentElement.lang);
    console.log(document.links);
    console.log(document.images);
    console.log(document.forms);
    console.log(document.styleSheets);
    console.log(document.scripts);
    


    //Vamos a tener:
    Node
    NodeList //[Node1, Node2, ...]

    //o
    HTMLElement

    HTMLCollection
    HTMLElement

    let ac = new HTMLCollection(new HTMLElement, );

    let myHTMLCo = document.links;
    for (let elem of myHTMLCo){
        console.log("-")
    }
}