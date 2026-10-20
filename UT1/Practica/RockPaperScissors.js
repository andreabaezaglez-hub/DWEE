"use strict";

let player1 = "";
let player2 = "";
let ganador = "";
let jugada = "";
let jugadaP1;
let jugadaP2;
let contador = 0;
let ganadasP1 = 0;
let ganadasP2 = 0;
let empate = 0;

let validarNombre = (nombre) => {
    return /^[a-zA-Z]+$/.test(nombre);
}

let validarJugada = (jugada) => {
    return /^[RrPpSs]+$/.test(jugada);
}

let calcularGanador = (jugadaP1, jugadaP2) => {
    if (((jugadaP1 === "s" || jugadaP1 === "S") && (jugadaP2 === "s" || jugadaP2 === "S"))
        || ((jugadaP1 === "r" || jugadaP1 === "R") && (jugadaP2 === "r" || jugadaP2 === "R"))
        || ((jugadaP1 === "p" || jugadaP1 === "P") && (jugadaP2 === "p" || jugadaP2 === "P"))) {
        //Empate
        empate++;

    } else if (((jugadaP1 === "s" || jugadaP1 === "S") && (jugadaP2 === "p" || jugadaP2 === "P"))
        || ((jugadaP1 === "p" || jugadaP1 === "P") && (jugadaP2 === "r" || jugadaP2 === "R"))
        || ((jugadaP1 === "r" || jugadaP1 === "R") && (jugadaP2 === "s" || jugadaP2 === "S"))) {
        //Gana player1
        ganadasP1++;

    } else if (((jugadaP2 === "s" || jugadaP2 === "S") && (jugadaP1 === "p" || jugadaP1 === "P"))
        || ((jugadaP2 === "p" || jugadaP2 === "P") && (jugadaP1 === "r" || jugadaP1 === "R"))
        || ((jugadaP2 === "r" || jugadaP2 === "R") && (jugadaP1 === "s" || jugadaP1 === "S"))) {
        //Gana player2
        ganadasP2++;

    }

}

while (!validarNombre(player1)) {
    player1 = prompt("Introduzca el nombre del jugador 1:");

}

while (!validarNombre(player2)) {
    player2 = prompt("Introduzca el nombre del jugador 2:");

}

do {
    jugadaP1 = "";
    jugadaP2 = "";

    while (!validarJugada(jugadaP1)) {
        jugadaP1 = prompt("Introduzca su jugada "+player1+": Rock (R-r), Paper (P-p) o Scissors (S-s)");
    }

    while (!validarJugada(jugadaP2)) {
        jugadaP2 = prompt("Introduzca su jugada "+player2+": Rock (R-r), Paper (P-p) o Scissors (S-s)");
    }

    contador++;

    alert("Se han jugado un total de " + contador + " veces.\n"
        + "La elección del jugador1 ha sido: " + jugadaP1 + " y la del jugador2: " + jugadaP2 + "\n"
        + "El ganador de este turno es " + calcularGanador(jugadaP1, jugadaP2)
        + "Las puntuaciones hasta el momento son, jugador1: " + ganadasP1 + ", jugador2: " + ganadasP2);

} while (contador < 5 && ganadasP1 < 3 && ganadasP2 < 3);

if (ganadasP1 > ganadasP2) {
    ganador = player1;
} else {
    ganador = player2;
}

alert("Se han jugado un total de " + contador + " veces.\n"
    + "El jugador1 ha ganado un total de " + ganadasP1 + " veces.\n"
    + "El jugador2 ha ganado un total de " + ganadasP2 + " veces.\n"
    + "Se ha empatado un total de " + empate + " veces.\n"
    + "Ha ganado el jugador: " + ganador);