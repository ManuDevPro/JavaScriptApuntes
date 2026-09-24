/*
quiero que tú hagas el siguiente, sin mirar el anterior:

Ordena estos números de mayor a menor:

const numeros = [15, 80, 3, 45, 100, 20];

Esta vez sí puedes utilizar lo que acabamos de aprender.
*/

const numeros = [15, 80, 3, 45, 100, 20];

const orden = numeros.sort((a, b) => b - a);
console.log(orden);