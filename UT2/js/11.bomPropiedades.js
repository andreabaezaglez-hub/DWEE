"use strict"
{
    console.log(window.location);
    console.log(window.location.href);
    console.log(window.location.origin);
    console.log(window.location.protocol);
    console.log(window.location.host);
    console.log(window.location.hostname);
    console.log(window.location.port);
    console.log(window.location.pathname);

    console.log(window.history);
    //window.history.back();
    //window.history.forward();

    let back = document.createElement("button");
    back.textContent = "Volver";
    document.body.appendChild(back);

    back.addEventListener("click", (evento) => {
        window.history.back();
    })

    let forward = document.createElement("button");
    forward.textContent = "Siguiente";
    document.body.appendChild(forward);

    // forward.addEventListener("click", (evento) => {
    //  window.history.forward();    
    // });

    forward.onclick = function (e) {
        window.history.forward();
    };

    let refresh = document.createElement("button");
    refresh.textContent = "Refrescar";
    document.body.appendChild(refresh);

    refresh.onclick = function (e) {
        window.history.go();
    }




    console.log(window.navigator);
    console.log(window.navigator.userAgent);
    console.log("-----");
    console.log(window.navigator.connection);


    let geolocalizacion = document.createElement("button");
    geolocalizacion.textContent = "Geolocalización";
    document.body.appendChild(geolocalizacion);

    geolocalizacion.addEventListener("click", function (e) {
        window.navigator.geolocation.getCurrentPosition(verDatosGeo, error, opciones);
    });

    const opciones = {
        enableHighAccuracy: true,
        timeout: 5000, //Tiempo max de espera para obtener la geolocalización
        maximumAge: 0 //para que no coja el dato de la caché de navegador
    }

    function verDatosGeo(pos) {
        let coordenada = pos.coords;

        console.log("Tu ubicación actual es: ");
        console.log(coordenada.latitude);
        console.log(coordenada.longitude);
        console.log(coordenada.accuracy + " metros");
    }

    function error(er) {
        console.error(er.code + " - " + er.message);
    }

    let ventana;

    let botonAbrirVentana = document.createElement("button");
    botonAbrirVentana.textContent = "Abrir Ventana";
    document.body.appendChild(botonAbrirVentana);

    botonAbrirVentana.addEventListener("click", (evento) => {
        ventana = window.open("https://iesmartinezm.es"); //abre en nueva pestaña
    });

    let botonCerrarVentana = document.createElement("button");
    botonCerrarVentana.textContent = "Cerrar Ventana";
    document.body.appendChild(botonCerrarVentana);

    botonCerrarVentana.addEventListener("click", (evento) => {
        //window.close(); //se cierra a si misma
        ventana.close(); //no me funciona pero cierra a ventana que se abrió
    });

    let botonImprimir = document.createElement("button");
    botonImprimir.textContent = "Imprimir Ventana";
    document.body.appendChild(botonImprimir);

    botonImprimir.addEventListener("click", (evento) => {
        window.print();
    });


    //https://developer.mozilla.org/es/docs/Web/API/Location
    //https://developer.mozilla.org/en-US/docs/Web/API/History_API
    //https://developer.mozilla.org/es/docs/Web/API/Window/navigator
    //https://developer.mozilla.org/es/docs/Web/API/Navigator/geolocation
}