/*
El reto final del Día 11

Ahora vamos a hacer algo un poco más parecido a una aplicación.

Tenemos:
const productos = [
    { nombre: "Ordenador", precio: 1200, cantidad: 2 },
    { nombre: "Teclado", precio: 80, cantidad: 3 },
    { nombre: "Monitor", precio: 300, cantidad: 2 },
    { nombre: "Ratón", precio: 40, cantidad: 5 }
];

Queremos calcular el valor total de todo el inventario.

Por ejemplo:
Ordenador → 1200 × 2 = 2400
Teclado   → 80 × 3   = 240
Monitor   → 300 × 2  = 600
Ratón     → 40 × 5   = 200

Total:
3440

La estructura es:
const totalInventario = productos.reduce(function(acumulador, producto) {

    // TU CÓDIGO

}, 0);

console.log(totalInventario);
💡 Pista

Esta vez no tienes que sumar simplemente:
producto.precio

Porque cada producto tiene una cantidad.

Tienes que calcular:
precio × cantidad

y eso añadirlo al acumulador.
*/

const productos = [
    { nombre: "Ordenador", precio: 1200, cantidad: 2 },
    { nombre: "Teclado", precio: 80, cantidad: 3 },
    { nombre: "Monitor", precio: 300, cantidad: 2 },
    { nombre: "Ratón", precio: 40, cantidad: 5 }
];

const totalInventario = productos.reduce(function (acumulador, producto) {
    return acumulador + (producto.precio * producto.cantidad);
}, 0);

console.log(totalInventario);