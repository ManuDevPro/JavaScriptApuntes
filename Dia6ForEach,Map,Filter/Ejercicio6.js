
/*
Tenemos:
const numeros = [2, 5, 8, 11, 14, 17, 20];

Objetivo
Primero queremos quedarnos solamente con los números mayores que 10.
Después queremos multiplicar esos números por 2.

El resultado final debe ser:

[22, 28, 34, 40]

Necesitarás dos métodos:

filter()
y después:
map()

💡 Pista: puedes hacer algo como:

const mayores = numeros.filter(...);

const resultado = mayores.map(...);
*/

const numeros = [2, 5, 8, 11, 14, 17, 20];

const mayores = numeros.filter(function(numero){
    return numero > 10;
});

const doble = mayores.map(function(numeroDoble){
    return numeroDoble *2;
});

console.log(doble);