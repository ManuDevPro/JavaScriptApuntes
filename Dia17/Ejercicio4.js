/*
Tenemos:

const productos = [
    { nombre: "Portátil", precio: 900 },
    { nombre: "Ratón", precio: 25 },
    { nombre: "Monitor", precio: 250 },
    { nombre: "Cámara", precio: 150 }
];
🎯 Tu misión

Ordena productos de menor a mayor precio utilizando sort().

Después muestra el resultado.

No busques la solución. No te preocupes si te equivocas.

Escribe lo que tú creas que debe ir dentro de sort() y me lo mandas.

Yo me encargo del resto.
*/

// const productos = [
//     { nombre: "Portátil", precio: 900 },
//     { nombre: "Ratón", precio: 25 },
//     { nombre: "Monitor", precio: 250 },
//     { nombre: "Cámara", precio: 150 }
// ];

// const orden = productos.sort((a, b) => a.precio - b.precio );
// console.log(orden);

// De mayor a menor:

const productos = [
    { nombre: "Portátil", precio: 900 },
    { nombre: "Ratón", precio: 25 },
    { nombre: "Monitor", precio: 250 },
    { nombre: "Cámara", precio: 150 }
];

const orden2 = productos.sort((a, b) => b.precio - a.precio);
console.log(orden2);