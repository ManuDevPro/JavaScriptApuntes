/*
Prueba de memoria

Sin mirar los ejercicios anteriores:

Tienes un array de productos con:

nombre
precio
stock

Quiero que hagas una función que devuelva el valor total del inventario, usando reduce() directamente.

Puedes inventarte tú mismo los productos.

No te doy ninguna pista todavía. Esta vez quiero comprobar qué recuerdas de verdad.
*/

const productos = [
    {nombre: "Monitor", precio: 300, stock: 3},
    {nombre: "Teclado", precio: 8, stock: 6},
    {nombre: "Mouse", precio: 5, stock: 5},
    {nombre: "Cables", precio: 7, stock: 10},
];

function valorInventarioTotal(productos) {
    const resultado = productos.reduce(function(acumulador, producto) {
        return acumulador + (producto.precio * producto.stock);
    }, 0);
    return resultado;
};
console.log(valorInventarioTotal(productos));

