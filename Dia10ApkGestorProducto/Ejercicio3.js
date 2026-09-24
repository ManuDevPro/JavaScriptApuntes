/*
Buscar un producto..Ahora vamos a usar find(), que aprendiste ayer.

Queremos crear una función:
buscarProducto(nombre)

La función recibirá un nombre y deberá buscar ese producto dentro de productos.

Por ejemplo:
buscarProducto("Monitor");

Debería encontrar:
{ nombre: "Monitor", precio: 300, stock: 3 }

💡 Pista
Dentro de la función tendrás que hacer algo parecido a:

const productoEncontrado = productos.find(function(producto) {

    // aquí tienes que comprobar el nombre

});

La condición que necesitas comparar es:
producto.nombre === nombre

Después puedes hacer:
console.log(productoEncontrado);

🎯 Tu misión
Escribe tú la función completa:

function buscarProducto(nombre) {
    // ...
}

Y después prueba:
buscarProducto("Monitor");
*/


const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Ratón", precio: 40, stock: 10 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Auriculares", precio: 150, stock: 0 }
];

function buscarProducto(nombre) {
    const productoEncontrado = productos.find(function(producto) {

        return producto.nombre === nombre;
        
    
    });
    console.log(productoEncontrado);
}

buscarProducto("Monitor");
