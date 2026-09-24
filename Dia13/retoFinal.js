/*
Tenemos:

const productos = [
    { nombre: "Ordenador", precio: 1200 },
    { nombre: "Teclado", precio: 80 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Ratón", precio: 40 }
];

Quiero que crees una función:

buscarProductos(...nombres)

que reciba cualquier cantidad de nombres de productos y simplemente haga un console.log() de esos nombres.

Por ejemplo:

buscarProductos("Ordenador", "Monitor", "Ratón");

debería mostrar:

["Ordenador", "Monitor", "Ratón"]
⚠️ Importante

No necesitamos filter, map ni reduce.

Solo quiero comprobar que puedes construir de memoria:

función + Rest + console.log() + llamada.
*/

const productos = [
    { nombre: "Ordenador", precio: 1200 },
    { nombre: "Teclado", precio: 80 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Ratón", precio: 40 }
];

function buscarProductos(...nombres) {
    console.log(nombres);
};
buscarProductos("Ordenador", "Monitor", "Ratón");