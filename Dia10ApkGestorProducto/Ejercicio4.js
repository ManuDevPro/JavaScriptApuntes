/*
Producto caro

Ahora vamos a combinar filter() + función + objetos.

Crea una función llamada:
productosCaros()

Debe encontrar todos los productos cuyo precio sea mayor de 100 €.

El resultado debería contener:
Ordenador
Monitor
Auriculares

💡 Pista
Necesitarás:
const caros = productos.filter(function(producto) {

    return producto.precio > 100;

});

Después utiliza forEach() para mostrar solamente sus nombres.

🎯 Hazlo tú completo, como acabas de hacer con buscarProducto().
*/

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Ratón", precio: 40, stock: 10 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Auriculares", precio: 150, stock: 0 }
];

function productosCaros() {
    const caros = productos.filter(function(producto) {

        return producto.precio > 100;
    
    });

    caros.forEach(function(producto){
        console.log(producto.nombre);
    });
}
productosCaros();