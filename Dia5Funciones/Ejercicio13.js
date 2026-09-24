/*
encontrar la nota más alta y la más baja

Ahora vamos a juntar lo que acabas de aprender.

Tenemos:
const notas = [8, 5, 10, 3, 7, 9, 4];

Crea una función:
analizarNotas(notas)

que encuentre:
La nota más alta
La nota más baja

El resultado debería ser:
Mayor: 10
Menor: 3

Empieza tú
Dentro de la función necesitas dos variables:
let mayor = notas[0];
let menor = notas[0];

Después haces un for.

Dentro del for tendrás dos if:
Uno para comprobar si el número actual es mayor:
if (notas[i] > mayor) {
    actualizar mayor
}

Y otro para comprobar si es menor:
if (notas[i] < menor) {
    actualizar menor
}
*/

const notas = [8, 5, 10, 3, 7, 9, 4];


function analizarNotas(notas) {
    let menor = notas[0];
    let mayor = notas[0];

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] < menor) {
            menor = notas[i];
        }
        if (notas[i] > mayor) {
            mayor = notas[i];
        }
    }
    return{
        mayor: mayor,
        menor: menor
    }
}

const resultado = analizarNotas(notas);
console.log("Mayor:", resultado.mayor);
console.log("Menor:", resultado.menor);