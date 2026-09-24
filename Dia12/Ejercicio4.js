/*
Desestructuración de arrays

Ahora vamos a cambiar de objeto a arrays.

Tenemos:

const colores = ["rojo", "azul", "verde"];

Normalmente accederías así:

console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);

Pero también podemos desestructurar el array:

const [primero, segundo, tercero] = colores;

Ahora:

primero → "rojo"
segundo → "azul"
tercero → "verde"

Y podemos hacer:

console.log(primero);
console.log(segundo);
console.log(tercero);
🎯 Tu ejercicio

Tenemos:

const lenguajes = ["JavaScript", "Python", "Dart"];

Quiero que crees mediante destructuring:

lenguaje1
lenguaje2
lenguaje3

Y después imprimir:

JavaScript
Python
Dart
*/

const lenguajes = ["JavaScript", "Python", "Dart"];

const [primero, segundo, tercero] = lenguajes;
console.log(primero);
console.log(segundo);
console.log(tercero);