
/*
Haz una función:
calcularMaximo(numeros)

que reciba este array:
const numeros = [12, 5, 27, 8, 19, 3];

y devuelva el número más grande.

Resultado esperado:
27

Inténtalo tú. No uses Math.max() todavía. Quiero que lo hagamos con for e if, porque ahí es donde vas a aprender de verdad.
*/


const numeros = [12, 5, 27, 8, 19, 3];


function calcularMaximo(numeros) {
    let mayorNumero = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayorNumero) {
            mayorNumero = numeros[i];
        }
    }
    return mayorNumero;
}

const resultado = calcularMaximo(numeros);
console.log(resultado);