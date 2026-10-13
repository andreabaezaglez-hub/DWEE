"use strict"
{
    const r1=/.a.o/;
    //DATO dato dAto daTO
    const r2 = new RegExp(".a.o", "i");
    const r3 = new RegExp(/.a.o/, "i");

    console.log(r1.test("GATO"));
    console.log(r1.test("PatO"));
    console.log(r1.test("Perro"));

    const r4 = new RegExp("^fútbol"); // ^ al principio
    console.log(r4.test("no me gusta el fútbol")); // false
    console.log("Sevilla\nfútbol club");
    console.log(r4.test("Sevilla\nfútbol club"));

    const r5 = /./;
    console.log(r5.test("x")); // true
    console.log(r5.test("abc")); // true
    console.log(r5.test("")); // true

    let s =  "table footballfootbolin"
    const r6 = /foo/y; // sticky, y --> para encontrar al principio
    console.log(r6.lastIndex);
    console.log(r6.test(s)); // falso

    // CARACTERES ESPACIALES
    // . --> cualquier caracter
    // \ --> invierte significado del carácter
    const r7 = /\.a.o/i;
    console.log(r7.test(".aTO"));

    console.log(/A./.test("A.")); // true
    console.log(/A./.test("Ab")); // true

    // \s --> un espacio
    // [] --> caulquiera de los caracteres delinterior
    // [^] --> no existen los caracteres del interior
    // | --> alternativa: lo que está a la izq. o a la der.

    let r8 = /^[^aeiou]$/i;
    console.log(r8.test("BI"));

    let r9 = /[^aeiou]|.$/i;
    console.log(r9.test("xxxxx"));

    let r10 = /[^ca|ma]/i;
    console.log(r10.test("mapas"));

    /*
    [0-9] = \d
    [^0-9] = \D
    [A-Z] = ni ñ ni tildes
    [a-z]
    [A-Za-z0-9] = \w (la 'w' incluye el guión bajo)
    [^A-Za-z0-9] = \W (la 'W' verifica que no incluya tampoco '_')
    [ \t\r\n] = \s
    [^ \t\r\n] = \S
    */

    const r11 = /[A-Za-z0-9]/;
    console.log(r11.test("Xx7ñ"));

    /* \b = texto con espacios o símboloa de puntuación, o al principio o final */

    const r12 = /fo\b/i;
    console.log(r12.test("Esto es un párrafo"));
    const r13 = /\bfo/i;
    console.log(r13.test("Esto es un párra fo"));

    /* \B = lo contrario */

    /*
        * --> 0 o más ocurrencias
        + --> 1 o más ocurrencias
        ? --> carácter que lo procede puede aparecer o no
    */

        const r14 = /a*/;
        r14.test(""); // true
        r14.test("a") // true
        r14.test("aa") // true
        r14.test("aba") // true
        r14.test("bbb") // true

        const r15 = /a+/;
        r15.test(""); // false
        r15.test("a") // true
        r15.test("aa") // true
        r15.test("aba") // true
        r15.test("bbb") // false

        const r16 = /disparos?/;
        r16.test("escuché disparos en la habitación"); // true
        r16.test ("efectuó un disparo al aire"); // true

        /*
            {n}   --> se repite n veces
            {n, } --> se repite n o más veces
            {n,m} --> se repite entre n y m veces
        */

        const r17 = /[0-9]{2}/;
        r17.test(42); // true
        r17.test(88); // true
        r17.test(1); // false
        console.log(r17.test(125)); // true

        const r18 = /^[0-9]{2}$/;
        r18.test(4); // false
        r18.test(55); // true
        console.log(r18.test(125)); // false

        const r19 = /^[0-9]{3,}$/;
        r19.test(33); // false
        r19.test(345); // true
        r19.test(3450); // true

        const r20 = /^[0-9]{2,5}$/;
        r20.test(2); // false
        r20.test(444); // true
        r20.test(543213); // false

        const r21 = /^\d{2}$/;
        console.log(r21.test("aa1bb"));

        const r22 = /\w{3}$/;
        console.log(r22.test("-")); // false
        console.log(r22.test("aB7")); // true

        const r23 = /\b[áéíóúa-z]{3}\b/gi; // g --> global
        let t = "la ola del mar es azul y tenía más sal que el salero";
        console.log(r23.lastIndex);
        console.log(r23.exec(t));
        console.log(r23.lastIndex);
        console.log(r23.exec(t));
        console.log(r23.lastIndex);
        console.log(r23.exec(t));
        console.log(r23.lastIndex);
        console.log(r23.exec(t));
        console.log(r23.lastIndex);
        console.log(r23.exec(t));
        console.log(r23.lastIndex);

        let x = t.match(r23); // crea array con ocurrencias
        console.log(x);
}