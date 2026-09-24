/*
Gestor de productos

Vamos a trabajar con:
const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Ratón", precio: 40, stock: 10 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Auriculares", precio: 150, stock: 0 }
];

Tienes que crear 4 funciones.
1️⃣ mostrarDisponibles()

Debe mostrar solamente los productos que tengan:
stock > 0

Resultado:
Ordenador
Ratón
Monitor

2️⃣ buscarProducto(nombre)

Debe buscar un producto por su nombre utilizando find().

Por ejemplo:
buscarProducto("Monitor");

Debe mostrar el objeto del Monitor.

3️⃣ hayProductosSinStock()

Debe comprobar utilizando some() si existe algún producto con:
stock === 0

Debe mostrar:
true


4️⃣ todosTienenStock()

Debe comprobar utilizando every() si todos tienen:
stock > 0

Debe mostrar:
false

🎯 Lo importante

Intenta construir las cuatro funciones tú solo, sin copiar las soluciones anteriores.

Ya tienes todas las herramientas:
filter()  → seleccionar varios
find()    → encontrar uno
some()    → comprobar si alguno
every()   → comprobar si todos
forEach() → recorrer y mostrar

Y puedes usar funciones como:

function nombreFuncion() {
    // lógica
}

🚀 Al final deberías poder ejecutar:
mostrarDisponibles();

buscarProducto("Monitor");

hayProductosSinStock();

todosTienenStock();
*/

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Ratón", precio: 40, stock: 10 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Auriculares", precio: 150, stock: 0 }
];

function mostrarDisponibles() {
    const resultado = productos.filter(function (producto) {
        return producto.stock > 0;
    });
    console.log(resultado);
};
mostrarDisponibles();



function buscarProducto(nombre) {
    const mostrarNombre = productos.find(function (producto) {
        return producto.nombre === nombre;
    });
    console.log(mostrarNombre);
};
buscarProducto("Monitor");


function hayProductosSinStock() {
    const faltanStock = productos.some(function (producto) {
        return producto.stock === 0;
    });
    console.log(faltanStock);
};
hayProductosSinStock();


function todosTienenStock() {
    const todosTienen = productos.every(function (producto) {
        return producto.stock > 0
    });
    console.log(todosTienen);
};
todosTienenStock();

