
/*
Tenemos:
const productos = [
    {
        nombre: "Ordenador",
        precio: 1200
    },
    {
        nombre: "Teléfono",
        precio: 800
    },
    {
        nombre: "Tablet",
        precio: 500
    },
    {
        nombre: "Ratón",
        precio: 20
    },
    {
        nombre: "Teclado",
        precio: 50
    }
];

🎯 Objetivo
Queremos encontrar solamente los productos que cuesten 500 € o más.

El resultado debe contener:
Ordenador
Teléfono
Tablet

💡 Pista
Primero necesitas crear un nuevo array:
const productosCaros = productos.filter(function(producto) {

});

La condición debe comprobar el:
producto.precio

Y después puedes usar forEach() para mostrar cada producto.

El resultado final debería verse así:
Ordenador: 1200 €
Teléfono: 800 €
Tablet: 500 €
*/

const productos = [
    {
        nombre: "Ordenador",
        precio: 1200
    },
    {
        nombre: "Teléfono",
        precio: 800
    },
    {
        nombre: "Tablet",
        precio: 500
    },
    {
        nombre: "Ratón",
        precio: 20
    },
    {
        nombre: "Teclado",
        precio: 50
    }
];

const productosCaros = productos.filter(function(producto){
    return producto.precio >= 500;
});

productosCaros.forEach(function(producto) {
    console.log(`${producto.nombre}: ${producto.precio} €`);
});

