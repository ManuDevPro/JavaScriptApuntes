/*
Reto del Día 12

Vamos a hacer uno un poco más interesante.

Tenemos un array de productos:
const productos = [
    { nombre: "Ordenador", precio: 1200 },
    { nombre: "Teclado", precio: 80 },
    { nombre: "Monitor", precio: 300 }
];

Quiero una función:
function mostrarProductos(productos) {

    // TU CÓDIGO

}

Que recorra todos los productos usando forEach().

Pero dentro del forEach() quiero que desestructures directamente el objeto.

La idea es conseguir algo como:
productos.forEach(function({ nombre, precio }) {

    // aquí trabajas directamente con nombre y precio

});

Y que el resultado sea:
Producto: Ordenador - 1200€
Producto: Teclado - 80€
Producto: Monitor - 300€


💡 Pista importante

Puedes hacer la desestructuración en el propio parámetro de la función:
function({ nombre, precio })

Así no necesitas hacer después:
const { nombre, precio } = producto;
*/

const productos = [
    { nombre: "Ordenador", precio: 1200 },
    { nombre: "Teclado", precio: 80 },
    { nombre: "Monitor", precio: 300 }
];

function mostrarProductos(productos) {
    productos.forEach(function({nombre, precio}) {
        console.log(`Producto: ${nombre} - ${precio}`)
    });
};

mostrarProductos(productos);