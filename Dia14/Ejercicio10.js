/*
Tenemos:

const numeros = [5, 10, 15, 20];

Quiero que obtengas un nuevo array donde cada número esté multiplicado por 2.

Ya sabes hacerlo con map() y una función normal.

Esta vez quiero que lo hagas usando map() + función flecha.
*/


const numeros = [5, 10, 15, 20];

const resultado = numeros.map((numero)=> numero * 2);
console.log(resultado);
