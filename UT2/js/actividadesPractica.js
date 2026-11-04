
"use strict";

/* EXERCISE 1:
Using prompt, ask a number N to an user
and create in DOM N paragraphs with a random number
between 0 and 10 each one (both included).
*/

let n = Number(prompt("Introduce un numero:"));

for (let i = 0; i < n; i++) {
    let p = document.createElement("p");
    p.setAttribute("class", "cEj1");

    let random = Math.floor(Math.random() * 11);

    p.innerHTML = `<i>${random}</i>`;

    document.body.append(p);
}


/* EXERCISE 2:
Using prompt, ask a number N to an user and create
in DOM N H2 elements writing your name in bold and italic
+ a random number between 0 and 10 in each H2.
*/

let n2 = Number(prompt("Introduce un numero:"));

for (let i = 0; i < n2; i++) {
    let h2 = document.createElement("h2");

    h2.setAttribute("id", `idEj2_${i + 1}`);

    let random = Math.floor(Math.random() * 11);

    h2.innerHTML = `<strong><i>Andrea</i></strong> ${random}`;

    document.body.append(h2);
}


/* EXERCISE 3:
Using prompt, ask a number N to an user and create
in DOM an unordered list with N random numbers between 1 and 15
for each element in bold.
*/

let n3 = Number(prompt("Introduce un numero:"));

let ul = document.createElement("ul");

ul.setAttribute("id", "idListaEj3");

for (let i = 0; i < n3; i++) {
    let li = document.createElement("li");

    let random = Math.floor(Math.random() * 15 + 1);

    li.innerHTML = `<strong>${random}</strong>`;

    ul.appendChild(li);
}

document.body.append(ul);


/* EXERCISE 4:
Create an image and put it after the last random number
in exercise number one.
*/

let listaPEj1 = document.body.querySelectorAll(".cEj1");

let ultimoPEj1 = listaPEj1[listaPEj1.length - 1];

let img = document.createElement("img");

img.src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
img.alt = "Imagen del ejercicio 4";

if (ultimoPEj1) {
    ultimoPEj1.insertAdjacentElement("afterend", img);
}


/* EXERCISE 5:
Create a link to www.google.es before the first child
of the H2 in exercise number two.
*/

let primerH2DelEj2 = document.querySelector("#idEj2_1");

let enlace = document.createElement("a");

enlace.href = "https://www.google.es";
enlace.innerText = "Google";

if (primerH2DelEj2) {
    primerH2DelEj2.insertAdjacentElement("afterbegin", enlace);
}


/* EXERCISE 6:
Create a paragraph with your name and put it after
the end of unordered list in exercise three.
*/

let laUlDelEj3 = document.querySelector("#idListaEj3");

let nombre = document.createElement("p");

nombre.innerText = "Andreaaaaa";

if (laUlDelEj3) {
    laUlDelEj3.insertAdjacentElement("afterend", nombre);
}
