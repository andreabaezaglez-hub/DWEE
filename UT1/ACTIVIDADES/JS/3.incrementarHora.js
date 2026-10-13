// 3. Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.

let horas = parseInt(prompt("Introduce las horas (0-23): "));
let minutos = parseInt(prompt("Introduce los minutos (0-59): "));
let segundos = parseInt(prompt("Introduce los segundos (0-59): "));

if (isNaN(horas) || isNaN(minutos) || isNaN(segundos) || horas < 0 || horas > 23 || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59) {
    console.log("Hora no válida.");
} else {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
            if (horas === 24) {
                horas = 0;
            }
        }
    }
    console.log(`Pasado un segundo, la hora será: ${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`);
}