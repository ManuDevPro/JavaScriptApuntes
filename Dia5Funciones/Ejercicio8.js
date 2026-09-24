
/*
Ahora vamos a subir un nivel.

Ya sabes recorrer arrays con for. También sabes crear funciones.

Vamos a combinar ambas cosas.

Tenemos:
const numeros = [10, 20, 30, 40];

Queremos crear una función:
calcularSuma

que reciba un array y devuelva la suma de todos sus números.

💡 Pistas

La función debe recibir el array:

function calcularSuma(numeros) {
}

Necesitarás un acumulador:
let suma = 0;

Y un for:
for (let i = 0; i < numeros.length; i++) {
}

Dentro tendrás que acumular:
suma = suma + numeros[i];

Y al terminar el for:
return suma;

Finalmente:
const resultado = calcularSuma(numeros);
console.log(resultado);

🎯 El resultado esperado es:
100
*/
const numeros = [10, 20, 30, 40];


function calcularSuma(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
        
    }
    return suma
}

const resultado = calcularSuma(numeros);
console.log(resultado);

console.log(calcularSuma([2, 33, 42]))//LLamada con otros valores

