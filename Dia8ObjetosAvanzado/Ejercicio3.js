/*
Crea este objeto:
const usuario = {
    nombre: "Manu",
    edad: 31,

    aumentarEdad: function(cantidad) {

    }
};

Tu método aumentarEdad() debe recibir una cantidad y sumársela a la edad.

Después haz:
usuario.aumentarEdad(4);

Y muestra la edad.

El resultado esperado:
35

💡 Pista
Dentro del método necesitarás algo parecido a:
this.edad = this.edad + cantidad;
*/

const usuario = {
    nombre: "Manu",
    edad: 31,

    aumentarEdad: function(cantidad) {
        this.edad = cantidad + this.edad;
    }
}
usuario.aumentarEdad(4);
console.log(usuario.edad);