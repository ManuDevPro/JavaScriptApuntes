/*
Tenemos:

const numeros = [40, 10, 80, 25, 5, 60];
Ejercicio 1

Haz que numeros quede ordenado de menor a mayor.

Pista mínima: sort() por sí solo tiene un comportamiento especial con los números.
*/

const numeros = [40, 10, 80, 25, 5, 60];

const orden = numeros.sort((a,b) => a-b );
console.log(orden);