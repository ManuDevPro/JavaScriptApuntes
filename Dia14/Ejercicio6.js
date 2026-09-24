/*
Quiero una función llamada:

calcularValorInventario

La función debe:

Recibir el array productos.
Calcular cuánto dinero representa todo el inventario.
Para cada producto: precio × stock.
Sumar todos esos valores.
Devolver el resultado.
Finalmente, mostrar el resultado por consola.

No te doy sintaxis todavía.

🧠 Pista mental: ya tienes todas las herramientas necesarias para resolverlo. Piensa en el ejercicio que hicimos con reduce() en el Día 11.
*/

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Ratón", precio: 40, stock: 10 }
];

function calcularValorInventario(productos) {
    const resultado = productos.reduce(function(acumulador, producto) {
        return acumulador + (producto.precio * producto.stock);
    }, 0);
    return resultado
};
console.log(calcularValorInventario(productos));