// Tenemos:

// const productos = [
//     { nombre: "Portátil", precio: 900, stock: 5 },
//     { nombre: "Ratón", precio: 25, stock: 0 },
//     { nombre: "Monitor", precio: 250, stock: 3 },
//     { nombre: "Teclado", precio: 60, stock: 0 },
//     { nombre: "Cámara", precio: 150, stock: 8 }
// ];

// Quiero obtener:

// ["Portátil", "Monitor", "Cámara"]

// Es decir:

// Los nombres de todos los productos que tienen stock.

// Pero esta vez no te voy a decir qué métodos utilizar.

// Primero dime solamente:

const productos = [
    { nombre: "Portátil", precio: 900, stock: 5 },
    { nombre: "Ratón", precio: 25, stock: 0 },
    { nombre: "Monitor", precio: 250, stock: 3 },
    { nombre: "Teclado", precio: 60, stock: 0 },
    { nombre: "Cámara", precio: 150, stock: 8 }
];
function productosConStock(productos) {
    const seleccion = productos.filter((producto) => producto.stock > 0);
    const resultado = seleccion.map((producto) => producto.nombre);
    return resultado;
};
console.log(productosConStock(productos));