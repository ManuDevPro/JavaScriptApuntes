/*
Tenemos:

const numeros = [5, 10, 15];

Quiero una función:

multiplicarPorDos(numeros)

que use map() para convertir:

[5, 10, 15]

en:

[10, 20, 30]

Sin mirar apuntes, escribe la función completa y llámala con numeros.
*/
const numeros = [5, 10, 15];

function multiplicarPorDos(numeros) {
    const doble = numeros.map(function(numero) {
        return numero * 2;
    });
    console.log(doble);
};

multiplicarPorDos(numeros);