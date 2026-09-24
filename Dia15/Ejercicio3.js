/*
ahora mezclamos lo aprendido

Quiero que obtengas el nombre del primer usuario activo que sea mayor de 30 años.

Con el mismo array.

El resultado final debe ser:

Manu

Aquí tienes que pensar:

Primero necesitas localizar un usuario.
Debe cumplir dos condiciones:
estar activo
tener más de 30 años
Después queremos obtener su nombre.

Usa:

find()
arrow function
&&
y la propiedad nombre

No te doy el código. Piénsalo y escríbelo tú.
*/

const usuarios = [
    { nombre: "Manu", edad: 31, activo: true },
    { nombre: "Carlos", edad: 17, activo: true },
    { nombre: "Laura", edad: 25, activo: false },
    { nombre: "Pedro", edad: 40, activo: true }
];

const usuarioActivoMas = usuarios.find((usuario) => usuario.activo === true && usuario.edad > 30);
console.log(usuarioActivoMas.nombre);