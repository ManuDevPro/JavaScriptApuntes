/*
Tenemos:
const notas = [7, 8, 6, 9, 10];

Comprueba si todas las notas son mayores o iguales a 5.

Guarda el resultado en:
todasAprobadas

Y muestra el resultado con:
console.log(todasAprobadas);

💡 Pista: utiliza every().
*/

const notas = [7, 8, 6, 9, 10];

const todasAprobadas = notas.every(function(nota){
    return nota >= 5;
});

console.log(todasAprobadas);