
/*
Ahora vamos a subir un poco el nivel.

Tenemos:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Usa un for para recorrer el array.
Dentro, utiliza un if para mostrar solamente los números pares.

🎯 El resultado debe ser:

2
4
6
8
10
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++){

    if (numeros[i] % 2 === 0){
        console.log(numeros[i]);
    }
}