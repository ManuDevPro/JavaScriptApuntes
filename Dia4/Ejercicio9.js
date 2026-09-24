

/*
Ahora vamos a usar lo que acabas de aprender.

Tenemos:
const notas = [8, 7, 10, 6, 9];

Tu misión:
Crear una variable suma.
Recorrer el array con un for.
Sumar todas las notas.
Calcular el promedio.

💡 Para calcular el promedio:
promedio = suma / cantidad de notas

Y la cantidad de notas la puedes obtener con:
notas.length

🎯 El resultado debería ser:
Promedio: 8
*/

const notas = [8, 7, 10, 6, 9];
let suma = 0;

for (let i = 0; i < notas.length; i++){

    suma = (notas[i] + suma);
    promedio = suma / notas.length;
    
}

console.log(promedio);