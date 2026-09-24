
/*
Tenemos:

const numeros = [5, 12, 8, 20, 3, 15];

Quiero obtener un nuevo array que contenga solo los números mayores que 10, utilizando:

filter() + función flecha.

No te doy sintaxis. Ya conoces filter() y acabamos de aprender la función flecha.
*/

const numeros = [5, 12, 8, 20, 3, 15];

const mayores = numeros.filter((numero) => numero > 10);
console.log(mayores);