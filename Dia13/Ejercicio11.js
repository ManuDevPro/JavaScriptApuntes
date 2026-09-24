/*
Sin mirar apuntes:

const frutas = ["Manzana", "Pera"];
const masFrutas = ["Plátano", "Naranja"];

👉 Crea un nuevo array llamado todasLasFrutas que contenga las cuatro frutas usando Spread ....
*/

const frutas = ["Manzana", "Pera"];
const masFrutas = ["Plátano", "Naranja"];

const todasLasFrutas = [...frutas, ...masFrutas];
console.log(todasLasFrutas);