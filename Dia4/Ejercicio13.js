/*
Ahora combinaremos todo lo aprendido:
📦 Array
🔄 for
🧠 if
➕ Acumulador (suma)
➗ % para detectar pares

Tenemos:
const numeros = [10, 15, 20, 25, 30, 35];

🎯 Objetivo
Queremos sumar solamente los números pares.

Los pares son:
10 + 20 + 30 = 60

El resultado final debe mostrar:
Suma de números pares: 60

💡 Pista

Empieza así:
let suma = 0;

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 === 0) {
        
        // sumar el número a suma
        
    }
}

👉 Inténtalo tú solo. Este ejercicio es muy importante porque estás empezando a combinar varias herramientas como lo harías en un programa real. 🔥👨‍💻
*/

const numeros = [10, 15, 20, 25, 30, 35];

let suma = 0;

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0) {
        suma = (suma + numeros[i])
    }
}

console.log(`Suma de los numeros pares: ${suma}`);