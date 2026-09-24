

/*
Crea este array:
const ciudades = ["Madrid", "Barcelona", "Valencia"];

Queremos reemplazar:
Barcelona

por:
Castellón

El resultado debe ser:
["Madrid", "Castellón", "Valencia"]

👉 Usa splice() y pégame tu código.
*/

const ciudades = ["Madrid", "Barcelona", "Valencia"];

ciudades.splice(1, 1, "Castellón");
console.log(ciudades);