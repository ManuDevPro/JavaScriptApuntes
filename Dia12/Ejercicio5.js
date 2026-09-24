/*

🎯 Tu ejercicio

Usa:

const numeros = [10, 20, 30, 40];

y mediante destructuring crea las variables:

primero
tercero
cuarto

Después imprime las tres.
*/

const numeros = [10, 20, 30, 40];

const [primero, , tercero, cuarto] = numeros;
console.log(primero);
console.log(tercero);
console.log(cuarto);

