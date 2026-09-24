/*
Crea este objeto:
const producto = {
    nombre: "Ordenador",
    precio: 1200,

    obtenerPrecio: function() {

    }
};

Haz que obtenerPrecio() devuelva el precio utilizando:
this.precio

Después:
const precioProducto = producto.obtenerPrecio();

console.log(precioProducto);

Debe aparecer:
1200

💡 Aquí no necesitas console.log() dentro del método. Queremos practicar return.
*/

const producto = {
    nombre: "Ordenador",
    precio: 1200,

    obtenerPrecio: function(){
        return this.precio;
    }
}

const precioProducto = producto.obtenerPrecio();
console.log(precioProducto);