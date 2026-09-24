/*
Desestructuración + function

Ahora vamos a utilizarlo dentro de una función.

Tenemos:
const usuario = {
    nombre: "Manu",
    edad: 31,
    lenguaje: "JavaScript"
};

Queremos crear:
function mostrarUsuario(usuario) {
    // AQUÍ
}

Y cuando hagamos:
mostrarUsuario(usuario);

debe aparecer:
Nombre: Manu
Edad: 31
Lenguaje: JavaScript

💡 Pista
Dentro de la función puedes desestructurar:
const { nombre, edad, lenguaje } = usuario;

Después solo tienes que hacer los console.log().
*/

const usuario = {
    nombre: "Manu",
    edad: 31,
    lenguaje: "JavaScript"
};

function mostrarUsuario(usuario) {
    const {nombre, edad, lenguaje} = usuario
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Lenguaje: ${lenguaje}`);
}

mostrarUsuario(usuario);