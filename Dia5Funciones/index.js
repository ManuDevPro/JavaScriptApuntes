
//Funciones:

//Declarar
function saludar(){
    console.log("Hola Manu");
}

//Llamada
saludar();

//--------------------------------------------------------------------------------

function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

// Aquí:
// nombre
// es un parámetro.

// Cuando ejecutamos la función:
saludar("Manu");

// JavaScript utiliza:
nombre = "Manu"

// Resultado:
// Hola Manu
//--------------------------------------------------------------------------------------
/*
Una función puede recibir más de un parámetro.

Por ejemplo:
function presentar(nombre, edad) {
    console.log(`Hola, soy ${nombre} y tengo ${edad} años`);
}

Aquí tenemos:
nombre
edad
Dos parámetros.

Podemos llamar a la función así:
presentar("Manu", 30);

JavaScript relaciona los valores según el orden:
"Manu" → nombre
30     → edad

Resultado:
Hola, soy Manu y tengo 30 años
*/
//----------------------------------------------------------------------------------------------
/*
Pero también podemos crear funciones que realicen cálculos.

Ejemplo: sumar dos números
function sumar(numero1, numero2) {
    console.log(numero1 + numero2);
}

sumar(10, 5);

Resultado:
15

La función recibe:
10 → numero1
5  → numero2

Y hace:
numero1 + numero2
*/
//----------------------------------------------------------------------------------
/*
return

Ahora viene uno de los conceptos más importantes de las funciones. 🔥

Hasta ahora hacemos esto:
function multiplicar(numero1, numero2) {
    console.log(numero1 * numero2);
}

Esta función muestra el resultado en consola.

Pero muchas veces queremos que la función nos devuelva el resultado para poder guardarlo en una variable y utilizarlo después.

Para eso usamos:
return
🧠 Ejemplo
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

Ahora podemos guardar el resultado:
const resultado = sumar(10, 5);
console.log(resultado);

Resultado:
15
🤔 DIFERENCIA ENTRE console.log() Y return
console.log()
function sumar(numero1, numero2) {
    console.log(numero1 + numero2);
}

➡️ Solo muestra el resultado.

return
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

➡️ Devuelve el resultado para que podamos utilizarlo.

Por ejemplo:
const resultado = sumar(10, 5);
console.log(resultado);

📦 Ahora:
resultado = 15



IMPORTANTE: return TERMINA LA FUNCIÓN

Hay algo importante que debes saber:

Cuando JavaScript encuentra:
return

la función devuelve el valor y termina.

Por ejemplo:
function ejemplo() {
    return "Hola";

    console.log("Esto no se ejecuta");
}

La línea:
console.log("Esto no se ejecuta");
❌ No se ejecutaría.
*/