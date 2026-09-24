

/*
Tenemos este array:

const lenguajes = ["HTML", "CSS", "JavaScript", "Python", "Dart"];

Quiero que elimines:
Python

💡 Antes de escribir el código, piensa:
HTML        → índice 0
CSS         → índice 1
JavaScript  → índice 2
Python      → índice 3
Dart        → índice 4

Después utiliza:
lenguajes.splice(...);


Finalmente:
console.log(lenguajes);
*/

const lenguajes = ["HTML", "CSS", "JavaScript", "Python", "Dart"];

lenguajes.splice(3,1);


console.log(lenguajes);