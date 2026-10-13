"use strict"
{
    try {
        console.log("En el Try se agrega el código a evaluar");//se ejecuta
        noExiste;//Lanza un error
        console.log("Segundo mensaje en el try");//no se ejecuta porque salta un
error en la línea anterior
    } catch (error) {
        console.log("Catch, captura cualquier error surgido o lanzado en el
try");//se ejecuta
        console.log(error);//Se ejecuta
    } finally {
        console.log("El bloque finally se ejecutará siempre al final de unbloque
try-catch");//se ejecuta siempre
    }
    try {
        console.log("En el Try se agrega el código a evaluar");//se ejecuta
        noExiste;//Lanza un error
        console.log("Segundo mensaje en el try");//no se ejecuta porque salta un
error en la línea anterior
    } catch (error) {
        console.log("Catch, captura cualquier error surgido o lanzado en el
try");//se ejecuta
        console.log(error);//Se ejecuta
    } finally {
        console.log("El bloque finally se ejecutará siempre al final de unbloque
try-catch");//se ejecuta siempre
    }
}