
/*
Tenemos:
const lenguajes = ["JavaScript", "Python", "Dart", "Java"];

Quiero que salga:
0 - JavaScript
1 - Python
2 - Dart
3 - Java

forEach() puede recibir dos parámetros:

lenguajes.forEach(function(lenguaje, indice){

});

El primero es el elemento y el segundo es su posición.

Tu misión
Completa el código para conseguir el resultado anterior.
*/

const lenguajes = ["JavaScript", "Python", "Dart", "Java"];

lenguajes.forEach(function (lenguaje, indice) {
    console.log(`${indice} - ${lenguaje}`);
})