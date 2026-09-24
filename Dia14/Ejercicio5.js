/*
Pensamiento de desarrollador

Hasta ahora has practicado cada herramienta por separado.

Ahora quiero que empieces a pensar:

«¿Qué herramientas necesito para resolver este problema?»

Tenemos estos productos:

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Ratón", precio: 40, stock: 10 }
];

Quiero una variable llamada productosDisponibles que contenga solamente los productos cuyo stock sea mayor que 0.

Después quiero mostrar por consola los productos disponibles.

Reglas

Puedes utilizar cosas que ya hemos estudiado.

No quiero que inventes sintaxis nueva.

Y esta vez no te digo qué método debes utilizar.

Quiero que tú decidas.

Piénsalo antes de escribir.

¿Qué herramienta de JavaScript necesitas para seleccionar solamente algunos elementos de un array?
*/

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Ratón", precio: 40, stock: 10 }
];

const productosDisponibles = productos.filter(function(producto) {
    return producto.stock > 0;
});

productosDisponibles.forEach(function({nombre, stock}) {
    console.log(`Nombre: ${nombre} - Stock: ${stock}`);
});


