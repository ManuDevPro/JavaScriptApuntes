

/*
Usa este mismo array:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Crea un for que muestre solamente los números impares.

🎯 Resultado esperado:

1
3
5
7
9
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++){

    if (numeros[i] % 2 !== 0) {
        console.log(numeros[i]);
    }
}