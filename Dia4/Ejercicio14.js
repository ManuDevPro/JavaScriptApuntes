/*
EL ÚLTIMO RETO ANTES DEL MINI PROYECTO

Vamos a hacer un ejercicio que combina:
📦 Arrays
🔄 for
🧠 if y else
🔢 Contadores

Tenemos:
const numeros = [5, 12, 8, 20, 3, 15, 7];

🎯 Objetivo
Queremos contar:
Cuántos números son mayores o iguales a 10.
Cuántos números son menores que 10.

El resultado debería ser:
Mayores o iguales a 10: 3
Menores que 10: 4

💡 Pista
Necesitarás dos contadores:
let mayores = 0;
let menores = 0;

Dentro del for:
if (numeros[i] >= 10) {
    // aumentar mayores
} else {
    // aumentar menores
}
*/

const numeros = [5, 12, 8, 20, 3, 15, 7];

let mayores = 0;
let menores = 0;

for (let i = 0; i < numeros.length; i++) {
    
    if (numeros[i] >= 10) {
        mayores++
    } else {
        menores++
    }
    
}

console.log(`Mayores o igual a 10: ${mayores}`);
console.log(`Menores que 10: ${menores}`);