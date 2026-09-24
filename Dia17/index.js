/*
sort() y ordenar datos

Hasta ahora ya sabes:

filter() → seleccionar
map() → transformar
find() → encontrar uno
reduce() → acumular
some() / every() → comprobar
sort() → ordenar

Hoy aprenderemos sort() y, sobre todo, algo MUY importante: cómo ordenar números correctamente en JavaScript.

En sort(), cuando trabajamos con números, usamos una función que recibe dos valores:

(a, b) => a - b

Ese a - b le indica a JavaScript que ordene de menor a mayor.

Por tanto, tu código completo queda:

const numeros = [40, 10, 80, 25, 5, 60];

const orden = numeros.sort((a, b) => a - b);

console.log(orden);

Resultado:

[5, 10, 25, 40, 60, 80]
Qué significa

No necesitas memorizarlo todavía. Quédate con esta idea:

(a, b) => a - b

👉 orden numérico ascendente.
*/