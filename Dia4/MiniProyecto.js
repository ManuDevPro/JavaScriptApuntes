/*
ANALIZADOR DE NOTAS

Tenemos:
const notas = [8, 4, 7, 3, 10, 5, 6, 2];

Tu programa debe recorrer todas las notas y calcular:
1️⃣ Cuántos alumnos han aprobado
📌 Una nota aprobada es >= 5.
2️⃣ Cuántos han suspendido
📌 Una nota suspendida es < 5.
3️⃣ La suma de todas las notas
4️⃣ El promedio de las notas

💡 Pistas
Necesitarás variables como:
let aprobados = 0;
let suspendidos = 0;
let suma = 0;

Dentro del for tendrás que:
Sumar cada nota.
Usar if / else para contar aprobados y suspendidos.

💡 Importante: el promedio es mejor calcularlo después del for:
const promedio = suma / notas.length;

🎯 Resultado esperado
Aprobados: 5
Suspendidos: 3
Suma total: 45
Promedio: 5.625
*/

const notas = [8, 4, 7, 3, 10, 5, 6, 2];

let aprobados = 0;
let suspendidos = 0;
let suma = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 5) {
        aprobados++;
    } else {
        suspendidos++;
    }
    suma = notas[i] + suma;
    
}
const promedio = suma/notas.length;

console.log(`Aprobados: ${aprobados}`);
console.log(`Suspendidos: ${suspendidos}`);
console.log(`Suma total: ${suma}`);
console.log(`Promedio: ${promedio}`);