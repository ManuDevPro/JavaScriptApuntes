/*
Mostrar solo productos con stock

Queremos una función:
mostrarProductosDisponibles()

Que muestre solamente los productos que tienen stock.

Recuerda que cada producto tiene:
stock: 5
stock: 0
stock: 10

Un producto está disponible cuando:
producto.stock > 0

🎯 Objetivo
El resultado debería ser:

Ordenador
Ratón
Monitor

💡 Pista
Aquí puedes combinar lo que aprendiste en el Día 6:
filter()

y después:
forEach()

La estructura podría empezar así:

function mostrarProductosDisponibles() {

    const disponibles = productos.filter(function(producto) {

        // condición

    });

    // aquí recorremos disponibles

}
*/

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Ratón", precio: 40, stock: 10 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Auriculares", precio: 150, stock: 0 }
];

function mostrarProductosDisponibles(){
    const disponibles = productos.filter(function(producto){
        return producto.stock > 0;
    });
    disponibles.forEach(function(producto){
        console.log(producto.nombre);
    });
}
mostrarProductosDisponibles()