/*
Tenemos:
const numeros = [5, 10, 15, 20];

Queremos obtener:
50
*/

const numeros = [5, 10, 15, 20];

const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
},0 );
console.log(suma);