/*
Vamos a juntar todo lo que has aprendido hoy.

Crea un objeto producto con:

nombre → "Ordenador"
precio → 1200
cantidad → 2

Y dos métodos:

1. calcularTotal()

Debe calcular:
precio × cantidad

y devolver el resultado.

Con los datos anteriores:
1200 × 2 = 2400


2. mostrarInfo()

Debe mostrar:
Producto: Ordenador
Precio: 1200€
Cantidad: 2
Total: 2400€

💡 Dentro de mostrarInfo() puedes llamar al otro método:

this.calcularTotal()

Así practicas algo muy importante: un método de un objeto puede utilizar otro método del mismo objeto.

🎯 Objetivo

Al ejecutar:
producto.mostrarInfo();

debe aparecer:
Producto: Ordenador
Precio: 1200€
Cantidad: 2
Total: 2400€
*/


const producto = {
    nombre: "Ordenador",
    precio: 1200,
    cantidad: 2,

    calcularTotal: function(){
        return this.precio * this.cantidad;
    },

    mostrarInfo: function(){
        console.log(`Producto: ${this.nombre}`);
        console.log(`Precio: ${this.precio} €`);
        console.log(`Cantidad: ${this.cantidad}`);
        console.log(`Total: ${this.calcularTotal()} €`);
    }
}

producto.mostrarInfo();