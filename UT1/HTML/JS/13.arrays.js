"use strict"

{
    //DECLARAR UN ARRAY
    let myArray = [];
    myArray[0] = 10;
    myArray[1] = 20;
    myArray[2] = "Martinez";
    console.log(myArray);
    

    let myArray2 = new Array ();
    //myArray2[0] = "";
    myArray2[1] = "20";
    myArray2[2] = "3";
    console.log(myArray2);
    // número de elementos
    console.log ('Mi array tiene ${myArray.length} elementos');

    let myArray3 = ["gamusino", "globo", "up"];
    
    // clonado de un array
    let myArray4 = myArray3; // Por referencia
    myArray4 = [...myArray3]; // Por copia
    console.log(myArray4);
    myArray3[3] = "La madrastra de Cenicienta";


    //Arrays bidimensionales
    let myArrayBi1 = new Array ();
    myArrayBi1[0] = [1, 2, 3];
    myArrayBi1[1] = [4, 5, 6];
    console.table(myArrayBi1);
    
    
}