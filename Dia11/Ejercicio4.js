/*
Tenemos los mismos productos:

const productos = [
    { nombre: "Teclado", precio: 80 },
    { nombre: "Ratón", precio: 40 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 150 }
];

Ahora quiero que calcules cuánto dinero cuesta solamente comprar los productos que cuestan más de 100 €.

Los productos serían:

Monitor → 300 €
Auriculares → 150 €

Resultado:
450

💡 Aquí vas a necesitar combinar dos cosas que ya conoces:

filter() → para quedarnos con los productos de más de 100 €
reduce() → para sumar sus precios

La estructura inicial:

const productosCaros = productos.filter(function(producto) {
    
    // AQUÍ FILTRAMOS

});

const total = productosCaros.reduce(function(acumulador, producto) {
    
    // AQUÍ SUMAMOS

}, 0);

console.log(total);
*/

const productos = [
    { nombre: "Teclado", precio: 80 },
    { nombre: "Ratón", precio: 40 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 150 }
];

const productosCaros = productos.filter(function(producto) {
    return producto.precio > 100;
});

const total = productosCaros.reduce(function(acumulador, producto) {
    return acumulador + producto.precio;
},0 );

console.log(total);

