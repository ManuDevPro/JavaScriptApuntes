/*
Tenemos:

const frutas1 = ["Manzana", "Pera"];
const frutas2 = ["Plátano", "Naranja"];

Quiero crear un nuevo array llamado:

todasLasFrutas

que contenga:

["Manzana", "Pera", "Plátano", "Naranja"]
*/

const frutas1 = ["Manzana", "Pera"];
const frutas2 = ["Plátano", "Naranja"];

const todasLasFrutas = [...frutas1, ...frutas2];
console.log(todasLasFrutas);