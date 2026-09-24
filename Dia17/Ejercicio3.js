/*
Quiero que trabajes sin mirar una solución.

Tenemos este array:

const productos = [
    { nombre: "Portátil", precio: 1200 },
    { nombre: "Ratón", precio: 25 },
    { nombre: "Teclado", precio: 80 },
    { nombre: "Monitor", precio: 300 }
];
🎯 Objetivo

Usa sort() para ordenar los productos de menor a mayor precio y después muestra el resultado con console.log().

Regla: no quiero que crees otro array. Modifica el orden usando sort().

Escribe tú el código completo y mándamelo
*/

const productos = [
    { nombre: "Portátil", precio: 1200 },
    { nombre: "Ratón", precio: 25 },
    { nombre: "Teclado", precio: 80 },
    { nombre: "Monitor", precio: 300 }
];

const orden = productos.sort((a , b ) => a.precio - b.precio);
console.log(orden);