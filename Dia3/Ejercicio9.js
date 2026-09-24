

/*
Tenemos:
const numeros = [10, 20, 40, 50];

Queremos añadir:
30

para que el resultado sea:
[10, 20, 30, 40, 50]

💡 Piensa:
Índices actuales:
10 → 0
20 → 1
40 → 2
50 → 3

👉 Usa splice() para añadir 30 en la posición correcta
*/

const numeros = [10, 20, 40, 50];

numeros.splice(2, 0, 30);
console.log(numeros);
