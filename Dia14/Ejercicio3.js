/*
Tenemos:

const numeros = [5, 12, 8, 20, 3, 15];

Crea una variable llamada resultado que:

filtre los números mayores que 10;
después multiplique cada uno de esos números por 2;
finalmente haga console.log(resultado).

El resultado debería ser:

[24, 40, 30]

No escribas el resultado directamente. Quiero que construyas el código.
*/

const numeros = [5, 12, 8, 20, 3, 15];

const mayores = numeros.filter(function(numero) {
    return numero > 10;
});
const resultado = mayores.map(function(numero) {
    return numero * 2;
});
console.log(resultado);
