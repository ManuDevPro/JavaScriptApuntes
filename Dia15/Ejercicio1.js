/*
Copia este código:

const usuarios = [
    { nombre: "Manu", edad: 31, activo: true },
    { nombre: "Carlos", edad: 17, activo: true },
    { nombre: "Laura", edad: 25, activo: false },
    { nombre: "Pedro", edad: 40, activo: true }
];

Tu misión:

Crear una variable llamada usuarioEncontrado que encuentre el primer usuario mayor de 30 años.

Después:

console.log(usuarioEncontrado);
Reglas
Usa find().
Usa una función flecha =>.
No te doy la sintaxis.
No quiero que busques nada.
Si te atascas, me lo dices y te doy una pista mínima.

Quiero ver qué recuerdas tú, no qué puedes copiar.
*/

const usuarios = [
    { nombre: "Manu", edad: 31, activo: true },
    { nombre: "Carlos", edad: 17, activo: true },
    { nombre: "Laura", edad: 25, activo: false },
    { nombre: "Pedro", edad: 40, activo: true }
];

const usuarioEncontrado = usuarios.find((usuario) => usuario.edad > 30);
console.log(usuarioEncontrado);