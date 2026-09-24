
/*
Tenemos:
const notas = [8, 5, 10, 3, 7, 9, 4];

Crea una función:
analizarNotas(notas)

que devuelva 3 cosas:
La suma de todas las notas
El promedio
La nota más alta

El resultado esperado es:
Suma: 46
Promedio: 6.57
Mayor: 10

Pista
Necesitarás:
let suma = 0;
let mayor = notas[0];

Y dentro del for tendrás que hacer dos cosas:
acumular la suma
comprobar si hay una nota mayor

Después del for:
promedio = suma / notas.length;

Y finalmente devolver las tres cosas en un objeto.
*/

const notas = [8, 5, 10, 3, 7, 9, 4];

function analizarNotas(notas) {
    let suma = 0;
    let mayor = notas[0];
    let promedio = 0;

    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];

        if (notas[i] > mayor) {
            mayor = notas[i];
        }
    }
    promedio = suma / notas.length;

    return{
        suma,
        promedio,
        mayor
    }
}

const resultado = analizarNotas(notas);
console.log("Suma:",resultado.suma);
console.log("Promedio:", resultado.promedio);
console.log("Mayor:", resultado.mayor);