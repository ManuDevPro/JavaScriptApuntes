
/*
Crea un Array llamado:

const frutas = [...]

Dentro coloca 4 frutas que te gusten.

Después muestra en la consola:

La primera fruta → [0]
La segunda fruta → [1]
La tercera fruta → [2]
La cuarta fruta → [3]

*/



const frutas = ["Piña", "Manzana", "Pera", "Banana"];

//Para cambiar un elemento por otro nuevo
frutas[2] = "Mango";

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

console.log(`Hay ${frutas.length} frutas en mi lista`);