/*
Ahora voy a quitarte las instrucciones paso a paso.

Tienes que resolver esto como si estuvieras delante de un problema real:

const productos = [
    { nombre: "Portátil", precio: 900, stock: 5 },
    { nombre: "Ratón", precio: 25, stock: 0 },
    { nombre: "Monitor", precio: 250, stock: 3 },
    { nombre: "Teclado", precio: 60, stock: 0 },
    { nombre: "Cámara", precio: 150, stock: 8 }
];
Objetivo

Crea una función:

resumenInventario(productos)

que devuelva un objeto con:

{
    productosDisponibles: 3,
    valorTotal: 6450
}

No te voy a decir qué métodos usar.

Piensa el problema, decide las herramientas y construye la solución.
*/

const productos = [
    { nombre: "Portátil", precio: 900, stock: 5 },
    { nombre: "Ratón", precio: 25, stock: 0 },
    { nombre: "Monitor", precio: 250, stock: 3 },
    { nombre: "Teclado", precio: 60, stock: 0 },
    { nombre: "Cámara", precio: 150, stock: 8 }
];

function resumenInventarioProductos(productos) {
    const disponibles = productos.filter((producto) => producto.stock > 0);
    const valorTotal = disponibles.reduce((acumulador, producto) => acumulador + (producto.precio * producto.stock), 0);
    return{
        productosDisponibles: disponibles.length,
        valorTotal,
    }
};
console.log(resumenInventarioProductos(productos));