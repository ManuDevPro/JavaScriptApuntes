/*
Mini reto

Tenemos estos productos:

const productos = [
    { nombre: "Ordenador", precio: 1200 },
    { nombre: "Teclado", precio: 80 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Ratón", precio: 40 }
];

Crea una función llamada:

mostrarProductosCaros(productos)

que haga lo siguiente:

Use filter().
Seleccione los productos cuyo precio sea mayor que 100.
Muestre el resultado con console.log().
🎯 Importante

No quiero que uses Rest ni reduce() aquí.

Quiero comprobar que puedes recuperar de memoria algo que aprendimos hace varios días.

Escribe el código completo, incluyendo la llamada:

mostrarProductosCaros(productos);

Y si dudas, no busques la solución. Es precisamente la duda la que estamos entrenando.
*/

const productos = [
    { nombre: "Ordenador", precio: 1200 },
    { nombre: "Teclado", precio: 80 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Ratón", precio: 40 }
];

function mostrarProductosCaros(productos) {
    const mayor = productos.filter(function(producto) {
        return producto.precio > 100;
    });
    console.log(mayor);
};

mostrarProductosCaros(productos);