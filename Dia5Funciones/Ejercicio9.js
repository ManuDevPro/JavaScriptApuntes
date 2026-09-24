
/*
Ahora vamos a subir un pequeño nivel.

Crea una función llamada:
calcularPromedio(numeros)

que reciba un array de números y devuelva su promedio.

Utiliza este array:
const numeros = [8, 10, 6, 4, 7];

El resultado debería ser:
7

No te doy la solución todavía. Hazla tú usando lo que acabamos de aprender: function, for, acumulador y return.
*/

const numeros = [8, 10, 6, 4, 7];

function calcularPromedio(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
        
    }
    return suma / numeros.length;
}

const resultado = calcularPromedio(numeros);
console.log(resultado);