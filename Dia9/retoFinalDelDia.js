/*
Ahora vamos a mezclar lo aprendido con arrays de objetos, que es mucho más parecido a trabajar en una aplicación real.

Tenemos:

const usuarios = [
    { nombre: "Manu", edad: 31, activo: true },
    { nombre: "Carlos", edad: 17, activo: true },
    { nombre: "Laura", edad: 25, activo: false },
    { nombre: "Pedro", edad: 40, activo: true }
];
Tu misión
Crea estas tres variables:

1. usuarioEncontrado
→ Encuentra con find() el primer usuario cuya edad sea mayor de 30.

2. hayUsuarioMenor
→ Comprueba con some() si existe algún usuario menor de 18.

3. todosActivos
→ Comprueba con every() si todos los usuarios están activos.

Después haz:
console.log(usuarioEncontrado);
console.log(hayUsuarioMenor);
console.log(todosActivos);

🎯 No te doy el código esta vez. Ya tienes todo lo necesario.
*/

const usuarios = [
    { nombre: "Manu", edad: 31, activo: true },
    { nombre: "Carlos", edad: 17, activo: true },
    { nombre: "Laura", edad: 25, activo: false },
    { nombre: "Pedro", edad: 40, activo: true }
];

const usuarioEncontrado = usuarios.find(function (usuario) {
    return usuario.edad > 30;
});

const hayUsuarioMenor = usuarios.some(function (usuario) {
    return usuario.edad < 18;
});

const todosActivos = usuarios.every(function (usuario) { 
    return usuario.activo === true;
});

console.log(usuarioEncontrado);
console.log(hayUsuarioMenor);
console.log(todosActivos);
