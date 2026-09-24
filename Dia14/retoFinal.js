/*
Tenemos:

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Ratón", precio: 40, stock: 10 }
];

Quiero una función que devuelva un array con los nombres de los productos que tienen stock.

El resultado debe ser:

["Ordenador", "Monitor", "Ratón"]

No te digo si necesitas filter, map, destructuring, función flecha... tú decides.

Hazlo desde cero. 🧠
*/

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Ratón", precio: 40, stock: 10 }
];

function disponibles(productos) {
    const mostrar = productos.filter(function(producto) {
        return producto.stock > 0;
    });
    const transformar = mostrar.map(function(producto) {
        return producto.nombre;
    });
    console.log(transformar);
};
disponibles(productos);