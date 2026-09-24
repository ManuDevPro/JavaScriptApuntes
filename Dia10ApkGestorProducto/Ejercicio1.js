/*
Preparar los datos

Tenemos una tienda con estos productos:
const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Ratón", precio: 40, stock: 10 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Auriculares", precio: 150, stock: 0 }
];

Ahora quiero que hagamos nuestra primera función.

🎯 Ejercicio 1
Crea una función llamada:
mostrarProductos()

La función debe recorrer productos utilizando forEach() y mostrar por consola el nombre de cada producto.

Por ejemplo:

Ordenador
Teclado
Ratón
Monitor
Auriculares

💡 Pista
La estructura será:

function mostrarProductos() {

    productos.forEach(function(producto) {

        // aquí muestras el nombre

    });

}

Solo te falta completar la parte de dentro.

Y después tienes que llamar a la función:
mostrarProductos();
*/

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Ratón", precio: 40, stock: 10 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Auriculares", precio: 150, stock: 0 }
];
function mostrarProductos() {
    productos.forEach(function(producto){
        console.log(producto.nombre);
    });
}
mostrarProductos();
