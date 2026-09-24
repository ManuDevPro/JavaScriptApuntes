/*
Usa estos productos:

const productos = [
    { nombre: "Portátil", precio: 900, stock: 0 },
    { nombre: "Ratón", precio: 25, stock: 8 },
    { nombre: "Monitor", precio: 250, stock: 2 },
    { nombre: "Teclado", precio: 60, stock: 0 },
    { nombre: "Cámara", precio: 150, stock: 5 }
];

Quiero una función llamada:

productosDisponibles(productos)

Y quiero que haga una sola cosa:

Devuelva un array con los nombres de los productos que tengan stock.

El resultado debería ser:

["Ratón", "Monitor", "Cámara"]
Reglas
Usa filter().
Usa map().
La función debe hacer return del resultado.
No te voy a dar la sintaxis. Quiero que la recuerdes tú.

Escribe el código completo y me lo pasas.

Yo lo corrijo. Si está bien, cierro oficialmente el Día 14 y te llevo al Día 15.
*/

const productos = [
    { nombre: "Portátil", precio: 900, stock: 0 },
    { nombre: "Ratón", precio: 25, stock: 8 },
    { nombre: "Monitor", precio: 250, stock: 2 },
    { nombre: "Teclado", precio: 60, stock: 0 },
    { nombre: "Cámara", precio: 150, stock: 5 }
];

function productosDisponibles(productos) {
    const seleccion = productos.filter(function(producto) {
        return producto.stock > 0;
    });

    const mostrar = seleccion.map(function(producto) {
        return producto.nombre;
    });
    return mostrar;
};
console.log(productosDisponibles(productos));