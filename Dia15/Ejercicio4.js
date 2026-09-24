/*
Con el mismo array, crea:

usuariosMayores

que contenga todos los usuarios mayores de 20 años.

Después haz un console.log().

El resultado debe contener:

Manu
Laura
Pedro

Usa filter() + arrow function.
*/

const usuarios = [
    { nombre: "Manu", edad: 31, activo: true },
    { nombre: "Carlos", edad: 17, activo: true },
    { nombre: "Laura", edad: 25, activo: false },
    { nombre: "Pedro", edad: 40, activo: true }
];
const usuariosMayores = usuarios.filter((usuario) => usuario.edad > 20 );
console.log(usuariosMayores);