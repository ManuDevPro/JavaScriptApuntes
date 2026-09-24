/*
Ahora vamos a juntar desestructuración + filter() + forEach().

Tenemos:

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Ratón", precio: 40, stock: 10 }
];

Queremos mostrar solamente los productos que tienen stock.

Resultado:

Ordenador - Stock: 5
Monitor - Stock: 3
Ratón - Stock: 10

💡 Pistas

Primero utiliza filter() para quedarte con:

stock > 0

Y después forEach().

Pero quiero que practiques lo que acabamos de aprender: desestructurar directamente en los parámetros.

La estructura puede ser:

const disponibles = productos.filter(function({ stock }) {

    // AQUÍ

});

disponibles.forEach(function({ nombre, stock }) {

    // AQUÍ

});
*/

const productos = [
    { nombre: "Ordenador", precio: 1200, stock: 5 },
    { nombre: "Teclado", precio: 80, stock: 0 },
    { nombre: "Monitor", precio: 300, stock: 3 },
    { nombre: "Ratón", precio: 40, stock: 10 }
];

const disponibles = productos.filter(function({stock}) {
    return stock > 0;
});


disponibles.forEach(function({nombre, stock}) {
   console.log(`Producto- ${nombre}: ${stock}`); 
});

