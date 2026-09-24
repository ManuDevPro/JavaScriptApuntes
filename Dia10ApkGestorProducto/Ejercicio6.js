/*
¿Todos tienen stock?

Ahora vamos con el último método que aprendimos: every().

Crea una función llamada:
todosTienenStock()

Debe comprobar si todos los productos tienen stock disponible.

Recuerda:
stock > 0

La función debería devolver:
false

porque tenemos:
Teclado → stock 0 ❌
Auriculares → stock 0 ❌

💡 Pista
Usa:

const resultado = productos.every(function(producto) {

    // condición

});

La condición tienes que pensarla tú esta vez. 😉

Después:
console.log(resultado);
*/

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Ratón", precio: 40, stock: 10 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Auriculares", precio: 150, stock: 0 }
];

function todosTienenStock() {
    const resultado = productos.every(function(producto) {
        return producto.stock > 0;
    });

    console.log(resultado);
}
todosTienenStock();