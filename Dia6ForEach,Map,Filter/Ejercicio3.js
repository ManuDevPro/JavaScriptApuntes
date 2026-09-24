/*
Tenemos:
const numeros = [5, 10, 15, 20];

Quiero que utilices map() para crear un nuevo array llamado triples que contenga cada número multiplicado por 3.

El resultado debe ser:
[15, 30, 45, 60]

La estructura es:

const triples = numeros.map(function(numero) {

});

👉 Completa tú el map().

No uses for ni forEach.
*/

const numeros = [5, 10, 15, 20];

const triples = numeros.map(function(numero){
    return numero * 3;
})
console.log(triples);