
/*
Crea este array:

const frutas = ["Piña", "Manzana", "Pera", "Banana"];

Usa un for para mostrar exactamente este formato:

Índice: 0 - Fruta: Piña
Índice: 1 - Fruta: Manzana
Índice: 2 - Fruta: Pera
Índice: 3 - Fruta: Banana

💡 Vas a necesitar:

console.log(`Índice: ${i} - Fruta: ${frutas[i]}`);

👉 Pero intenta escribir el for completo tú solo.
*/

const frutas = ["Piña", "Manzana", "Pera", "Banana", "jus"];

for (let i = 0; i < frutas.length; i++){
    console.log(`Indice: ${i} - Frutas: ${frutas[i]}`);
}