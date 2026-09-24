/*
Desestructuración cambiando el nombre

Ahora viene algo nuevo.

Tenemos:
const producto = {
    nombre: "Ordenador",
    precio: 1200
};

Hasta ahora haríamos:
const { nombre, precio } = producto;

Pero JavaScript también permite cambiar el nombre de la variable.

Por ejemplo:
const { nombre: nombreProducto } = producto;

Ahora:
nombreProducto → "Ordenador"

⚠️ Ojo con esto:
nombre: nombreProducto

significa:
"Coge la propiedad nombre y guárdala en una variable llamada nombreProducto."

🎯 Tu ejercicio

Extrae del objeto:

const producto = {
    nombre: "Ordenador",
    precio: 1200
};

pero quiero que las variables se llamen:
nombreProducto
precioProducto

Y después:
Producto: Ordenador
Precio: 1200€

La estructura es:
const { nombre: nombreProducto, precio: precioProducto } = producto;

console.log(`Producto: ${nombreProducto}`);
console.log(`Precio: ${precioProducto}€`);
*/

const producto = {
    nombre: "Ordenador",
    precio: 1200
};
const {nombre: nombreProducto, precio: precioProducto} = producto;
console.log(`Producto: ${nombreProducto}`);
console.log(`Precio: ${precioProducto}`);