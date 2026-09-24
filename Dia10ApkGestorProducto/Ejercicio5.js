/*
Comprobar stock

Ahora vamos a utilizar otro método que aprendiste ayer: some().

Crea una función:
hayProductoSinStock()

La función debe comprobar si existe algún producto cuyo stock sea 0.

Con nuestros productos, el resultado debe ser:
true

Porque tenemos:
Teclado → stock 0
Auriculares → stock 0

💡 Pista
Necesitas:
const resultado = productos.some(function(producto) {

    // condición

});

La condición será:
producto.stock === 0

Después:
console.log(resultado);

🎯 Haz la función completa tú solo.

Este ejercicio es importante porque estás empezando a pensar en términos de lógica de una aplicación, no solamente en aprender métodos de JavaScript.
*/

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Ratón", precio: 40, stock: 10 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Auriculares", precio: 150, stock: 0 }
];

function hayProductoSinStock() {
    const resultado = productos.some(function(producto) {
        return producto.stock === 0;
    });
    console.log(resultado);
}
hayProductoSinStock()