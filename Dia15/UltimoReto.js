/*
Tienes:

const productos = [
    { nombre: "Portátil", precio: 900, stock: 5 },
    { nombre: "Ratón", precio: 25, stock: 0 },
    { nombre: "Monitor", precio: 250, stock: 3 },
    { nombre: "Teclado", precio: 60, stock: 0 }
];

Quiero una función que devuelva el nombre del primer producto que tenga stock y cuyo precio sea superior a 100 €.

Resultado esperado:

"Portátil"
*/

const productos = [
    { nombre: "Portátil", precio: 900, stock: 5 },
    { nombre: "Ratón", precio: 25, stock: 0 },
    { nombre: "Monitor", precio: 250, stock: 3 },
    { nombre: "Teclado", precio: 60, stock: 0 }
];

function primerConStock(productos) {
    const encontrar = productos.find((producto) => producto.stock > 0 && producto.precio > 100);
    return encontrar.nombre;
};
console.log(primerConStock(productos));