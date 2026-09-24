/*
Reto práctico

Tenemos estos usuarios:

const usuarios = [
    { nombre: "Ana", edad: 22, activo: true },
    { nombre: "Luis", edad: 35, activo: false },
    { nombre: "Marta", edad: 28, activo: true },
    { nombre: "Carlos", edad: 41, activo: true },
    { nombre: "Sofía", edad: 19, activo: true }
];

Quiero una función:

usuariosDisponibles(usuarios)

que devuelva los nombres de los usuarios que:

tengan más de 25 años
y estén activos

El resultado esperado es:

["Marta", "Carlos"]
Reglas

Esta vez yo no te digo qué métodos utilizar.

Tú tienes que decidirlo basándote en lo que acabamos de aprender.

Y quiero que la función haga return, no console.log().
*/

const usuarios = [
    { nombre: "Ana", edad: 22, activo: true },
    { nombre: "Luis", edad: 35, activo: false },
    { nombre: "Marta", edad: 28, activo: true },
    { nombre: "Carlos", edad: 41, activo: true },
    { nombre: "Sofía", edad: 19, activo: true }
];

function usuariosDisponibles(usuarios) {
    const usuariosEncontrados = usuarios.filter((usuario) => usuario.edad > 25 && usuario.activo === true);
    const resultado = usuariosEncontrados.map((usuario) => usuario.nombre);
    return resultado;
};
console.log(usuariosDisponibles(usuarios));
