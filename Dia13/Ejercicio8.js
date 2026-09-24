
/*
Si tengo:

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

Quiero crear un nuevo array llamado todos que contenga:

[1, 2, 3, 4, 5, 6]

👉 Escribe solamente la línea que crea todos.
*/

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const todos = [...numeros1, ...numeros2];
console.log(todos);