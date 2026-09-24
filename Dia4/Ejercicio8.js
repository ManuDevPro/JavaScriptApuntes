
/*
Ahora vamos a aprender algo muy importante: usar un bucle para acumular un resultado.

Tenemos:
const numeros = [10, 20, 30, 40];

Queremos sumar todos los números:
10 + 20 + 30 + 40 = 100

La idea es crear una variable:
let suma = 0;
Y recorrer el array con un for.

Dentro del for tienes que hacer que suma vaya acumulando los números.
*/

const numeros = [10, 20, 30, 40];

let suma = 0;

for(let i = 0; i < numeros.length; i++){
    suma = (numeros[i] + suma);
}

console.log(suma);