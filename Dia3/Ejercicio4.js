

/*
Crea este array:

const lenguajes = ["JavaScript", "Python"];

Haz lo siguiente:

Añade "Dart" al final.
Añade "HTML" al principio.
Muestra el array completo.

El resultado debería ser:

["HTML", "JavaScript", "Python", "Dart"]
*/


const lenguajes = ["JavaScript", "Python"];

lenguajes.push("Dart");
lenguajes.unshift("HTML");

console.log(lenguajes);