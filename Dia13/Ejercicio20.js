/*
Quiero una función llamada obtenerDatos que:

reciba cualquier cantidad de valores mediante Rest;
haga return de esos valores.

Después:

const resultado = obtenerDatos("Manu", 31, "JavaScript");
console.log(resultado);

deberá mostrar:

["Manu", 31, "JavaScript"]
Tu turno

Escribe la función completa y la llamada sin mirar apuntes.
*/

function obtenerDatos(...datos) {
    return datos;
};

const resultado = obtenerDatos("Manu", 31, "JavaScript");
console.log(resultado);