/*
Ahora quiero un único número, no un array.

Con los mismos productos:

Calcula el valor total del stock de todos los productos que tengan stock.

Es decir:

Portátil → 900 × 5 = 4500
Monitor → 250 × 3 = 750
Cámara → 150 × 8 = 1200

Total:

6450
*/

const productos = [
    { nombre: "Portátil", precio: 900, stock: 5 },
    { nombre: "Ratón", precio: 25, stock: 0 },
    { nombre: "Monitor", precio: 250, stock: 3 },
    { nombre: "Teclado", precio: 60, stock: 0 },
    { nombre: "Cámara", precio: 150, stock: 8 }
];

function valorTotal(productos) {

    const seleccion = productos.filter((producto) => producto.stock > 0);

    const total = seleccion.reduce((acumulador, producto) => acumulador + (producto.precio * producto.stock), 0);

    return total;
};

console.log(valorTotal(productos));