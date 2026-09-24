/*
Ahora quiero que intentes nuevamente este:

const edades = [12, 18, 25, 16, 30, 17, 22];

Objetivo:
Recorrer las edades.
Si la edad es >= 18, mostrarla.
Cada vez que sea mayor de edad, hacer:
mayores++;

Empieza con:
let mayores = 0;
*/

const edades = [12, 18, 25, 16, 30, 17, 22];
let mayores = 0;

for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18){
        console.log(edades[i]);
        mayores++;
    }
}
console.log(`Cantidad de mayores de edad: ${mayores}`);