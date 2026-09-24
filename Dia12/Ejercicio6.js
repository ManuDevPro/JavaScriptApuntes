/*
Desestructuración + function

Ahora vamos a combinar lo aprendido.

Tenemos:
const producto = {
    nombre: "Monitor",
    precio: 300,
    stock: 5
};

Queremos una función:
function mostrarProducto(producto) {

    // TU CÓDIGO

}

Que muestre:
Producto: Monitor
Precio: 300€
Stock: 5

💡 Pista
Dentro de la función puedes hacer:
const { nombre, precio, stock } = producto;

Después utiliza esas tres variables para los console.log().
*/

const producto = {
    nombre: "Monitor",
    precio: 300,
    stock: 5
};

function mostrarProducto(producto) {
    const {nombre, precio, stock} = producto;
    console.log(`Producto: ${nombre}`);
    console.log(`Precio: ${precio} €`);
    console.log(`Stock: ${stock}`);
}
mostrarProducto(producto);