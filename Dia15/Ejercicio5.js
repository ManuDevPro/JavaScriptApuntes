/*
último de este bloque

Ahora quiero que hagas algo muy parecido, pero combinando conceptos.

Quiero obtener un array solamente con los nombres de los usuarios mayores de 20 años.

Resultado:

["Manu", "Laura", "Pedro"]

Necesitas pensar:

¿Qué herramienta selecciona?
¿Qué herramienta transforma?

Usa filter() + map() con arrow functions.
*/

const usuarios = [
    { nombre: "Manu", edad: 31, activo: true },
    { nombre: "Carlos", edad: 17, activo: true },
    { nombre: "Laura", edad: 25, activo: false },
    { nombre: "Pedro", edad: 40, activo: true }
];

const usuariosMayores = usuarios.filter((usuario) => usuario.edad > 20);
const resultado = usuariosMayores.map((usuario) => usuario.nombre);
console.log(resultado);