
/*
Utiliza el mismo array productos del ejercicio anterior.

Pero ahora quiero que elimines los tres console.log() individuales y utilices un solo forEach().

Debe mostrar:
Ordenador: 1200 €
Teléfono: 800 €
Tablet: 500 €

La estructura que necesitas es:
productos.forEach(function(producto) {

});

Dentro tendrás que utilizar:
producto.nombre

y:
producto.precio
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
];

productos.forEach(function(producto){
    console.log(`${producto.nombre}: ${producto.precio} €`);
});