/*
Tenemos:

const numeros = [5, 10, 15, 20];

Quiero que crees una función llamada mostrarMayores que:

reciba el array numeros como parámetro;
use filter();
se quede solamente con los números mayores que 10;
haga console.log() del resultado.

Escríbela tú completa, sin mirar apuntes.
*/

const numeros = [5, 10, 15, 20];

function mostrarMayores(numeros) {
    const mayores = numeros.filter(function(numero) {
        return numero > 10;
    });
    console.log(mayores);
};
mostrarMayores(numeros);