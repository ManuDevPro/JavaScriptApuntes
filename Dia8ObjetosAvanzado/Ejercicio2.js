/*
Crea este objeto:
const usuario = {
    nombre: "Manu",
    edad: 31,

    cumplirAnios: function() {

    }
};

Tu misión
Haz que cumplirAnios() aumente la edad en 1.

Después:
Ejecuta usuario.cumplirAnios();
Muestra la nueva edad.

El resultado debe ser:
32

💡 Dentro del método necesitarás:
this.edad

y puedes utilizar:
++

*/

const usuario = {
    nombre: "Manu",
    edad: 31,

    cumplirAnios: function () {
        this.edad++
    }
};
usuario.cumplirAnios();
console.log(usuario.edad);