

/*
Vamos a hacer un pequeño analizador de números.

Usa:
const numeros = [10, 3, 7, 20, 5, 8];

Crea:
function analizarNumeros(numeros)

La función debe devolver:
suma
promedio
mayor
menor

Ya tienes todas las herramientas necesarias para hacerlo.

El resultado debe ser:
Suma: 53
Promedio: 8.833...
Mayor: 20
Menor: 3
*/

const numeros = [10, 3, 7, 20, 5, 8];

function analizarNumeros(numeros) {
    let suma = 0;
    let mayor = numeros[0];
    let menor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];

        if (numeros[i] < menor) {
            menor = numeros[i];
        }

        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    const promedio = suma / numeros.length;

    return {
        suma: suma,
        promedio: promedio,
        mayor: mayor,
        menor: menor
    }
}

const resultado = analizarNumeros(numeros);
console.log("Suma: ", resultado.suma);
console.log("Promedio: ", resultado.promedio);
console.log("Mayor: ", resultado.mayor);
console.log("Menor: ", resultado.menor);

