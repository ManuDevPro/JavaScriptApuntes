/*
Ahora quiero comprobar que entiendes también seleccionar → transformar → calcular.

Tenemos:
const productos = [
    { nombre: "Portátil", precio: 900, stock: 5 },
    { nombre: "Ratón", precio: 25, stock: 0 },
    { nombre: "Monitor", precio: 250, stock: 3 },
    { nombre: "Teclado", precio: 60, stock: 0 },
    { nombre: "Cámara", precio: 150, stock: 8 }
];

🎯 Ejercicio 2

Quiero una función:
valorProductosConStock(productos)

que devuelva un array con el valor del stock de cada producto que tenga stock.

El valor de cada producto es:
precio × stock

Por tanto, el resultado esperado es:
[4500, 750, 1200]

Porque:
Portátil → 900 × 5
Monitor → 250 × 3
Cámara → 150 × 8
Importante

No te voy a decir qué métodos usar.

Tú decides la estrategia.
*/

const productos = [
    { nombre: "Portátil", precio: 900, stock: 5 },
    { nombre: "Ratón", precio: 25, stock: 0 },
    { nombre: "Monitor", precio: 250, stock: 3 },
    { nombre: "Teclado", precio: 60, stock: 0 },
    { nombre: "Cámara", precio: 150, stock: 8 }
];

function valorProductosConStock(productos) {
    const seleccion = productos.filter((producto) => producto.stock > 0);
    const calculo = seleccion.map((producto) => producto.precio * producto.stock);

    return calculo;
};
console.log(valorProductosConStock(productos));