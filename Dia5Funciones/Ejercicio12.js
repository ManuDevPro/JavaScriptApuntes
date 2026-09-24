
/*
Ahora quiero que hagamos uno un poquito más parecido a un problema real.

Tenemos:
const notas = [8, 5, 10, 3, 7, 9, 4];

Crea una función:
analizarNotas(notas)

que calcule cuántas notas están aprobadas y cuántas suspendidas.

Consideraremos:
5 o más → aprobado
Menos de 5 → suspendido

Para este ejercicio necesitarás dos contadores:
let aprobados = 0;
let suspendidos = 0;

Y dentro del for tendrás que utilizar if / else.

El resultado debería ser:
Aprobados: 5
Suspendidos: 2

No te preocupes si al principio no sabes cómo hacerlo. Este ejercicio es perfecto para practicar lo que ya has aprendido.
*/

const notas = [8, 5, 10, 3, 7, 9, 4];

function analizarNotas(notas) {
    let aprobados = 0;
    let suspendidos = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 5) {
            aprobados++;
        } else{
            suspendidos++;
        }
    }
    return { //Devolvemos como objeto... al ser mas de 1 elemento
        aprobados: aprobados,
        suspendidos: suspendidos
    }
}
const resultado = analizarNotas(notas);

console.log("Aprobados:", resultado.aprobados);
console.log("Suspendidos:", resultado.suspendidos);
