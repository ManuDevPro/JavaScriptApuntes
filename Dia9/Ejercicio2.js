/*
Utiliza este array:
const numeros = [3, 7, 12, 5, 9];

Quiero que compruebes si hay algún número mayor que 10.

Guárdalo en:
hayMayorDe10

Y después:
console.log(hayMayorDe10);

💡 Pista: utiliza .some() y la condición numero > 10.
*/

const numeros = [3, 7, 12, 5, 9];

const hayMayorDe10 = numeros.some(function(numero){
    return numero > 10;
});
console.log(hayMayorDe10);