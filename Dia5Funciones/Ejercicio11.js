/*
buscar el menor

Vamos a reutilizar exactamente la misma lógica, pero al revés.

Tenemos:
const numeros = [12, 5, 27, 8, 19, 3];

Crea:
function calcularMinimo(numeros)

Debe devolver:
3

Pista: si para encontrar el mayor utilizábamos:
if (numeros[i] > mayor)

pregúntate qué símbolo necesitas para encontrar el menor.
*/

const numeros = [12, 5, 27, 8, 19, 3];

function calcularMinimo(numeros) {
    let menor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor;
}

const resultado = calcularMinimo(numeros);
console.log(resultado);