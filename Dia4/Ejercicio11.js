
/*
Tenemos:
const frutas = ["Piña", "Manzana", "Pera", "Banana"];

Queremos recorrer el array y contar cuántas frutas hay usando un contador.

La estructura será:
const frutas = ["Piña", "Manzana", "Pera", "Banana"];
let contador = 0;
for (let i = 0; i < frutas.length; i++) {

    Mostrar la fruta

    Aumentar contador
}
console.log(`Cantidad de frutas: ${contador}`);


👉 Intenta completar tú las dos líneas que faltan dentro del for.

Pista: ya sabes ambas cosas:

console.log(frutas[i]);

y:

contador++;
*/

const frutas = ["Piña", "Manzana", "Pera", "Banana"];
let contador = 0;

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    contador++
}
console.log(`La cantidad de frutas es: ${contador}`);