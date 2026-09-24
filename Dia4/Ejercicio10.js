
/*
Tenemos:
const edades = [12, 18, 25, 16, 30, 17, 22];

Tu misión es:
1️⃣ Recorrer el array con un for.
2️⃣ Si la edad es mayor o igual a 18:
Mostrar la edad.
Contar cuántas personas son mayores de edad.

💡 Necesitarás una variable:
let mayores = 0;

Cada vez que encuentres una persona mayor de edad, tendrás que aumentar el contador.

🎯 El resultado final debería mostrar:
18
25
30
22

Cantidad de mayores de edad: 4

💡 Pista: para aumentar un contador puedes usar:
mayores++;
*/

const edades = [12, 18, 25, 16, 30, 17, 22];
let mayores = 0;

for (let i = 0; i < edades.length; i++){
    if (edades[i] >= 18){
        console.log(edades[i]);
        mayores++;
    }
}

console.log(`La cantidad de mayores es: ${mayores}`);