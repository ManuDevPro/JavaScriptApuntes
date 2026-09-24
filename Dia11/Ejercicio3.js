/*
Ahora subimos un nivel.

Esto se parece mucho más a lo que encontrarás en una aplicación real:

const productos = [
    { nombre: "Teclado", precio: 80 },
    { nombre: "Ratón", precio: 40 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 150 }
];

Queremos calcular el precio total de todos los productos.

El resultado debe ser:

570

La estructura:

const total = productos.reduce(function(acumulador, producto) {

    // TU CÓDIGO

}, 0);

console.log(total);

🧠 Pista
Aquí producto no es un número.

Es un objeto:

producto.nombre
producto.precio
*/

const productos = [
    { nombre: "Teclado", precio: 80 },
    { nombre: "Ratón", precio: 40 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 150 }
];


const precioTotal = productos.reduce(function(acumulador, producto) {
    return acumulador + producto.precio;
},0 );

console.log(precioTotal);