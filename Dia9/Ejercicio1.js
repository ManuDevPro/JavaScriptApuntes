/*
Quiero que tú escribas el código.

Tenemos:
const edades = [15, 22, 17, 30, 14, 25];

Usando find(), encuentra la primera edad mayor de 18 y guárdala en una variable llamada:
edadEncontrada

Después haz:
console.log(edadEncontrada);

💡 Pista mínima: la condición será edad > 18.
*/

const edades = [15, 22, 17, 30, 14, 25];

const edadEncontrada = edades.find(function(edad){
    return edad > 18;
});

console.log(edadEncontrada);