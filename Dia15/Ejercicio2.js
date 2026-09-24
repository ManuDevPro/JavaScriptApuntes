/*
Ahora subimos solo un escalón.

Con el mismo array usuarios, quiero que crees una variable:

usuariosActivos

que contenga solamente los usuarios que estén activos.

El resultado debe contener:

Manu
Carlos
Pedro

Y debe mantener los objetos completos, no solamente los nombres.

Reglas:

filter()
función flecha
condición sobre activo
después console.log()

No te doy la sintaxis. Hazlo tú.
*/

const usuarios = [
    { nombre: "Manu", edad: 31, activo: true },
    { nombre: "Carlos", edad: 17, activo: true },
    { nombre: "Laura", edad: 25, activo: false },
    { nombre: "Pedro", edad: 40, activo: true }
];
const usuariosActivos = usuarios.filter((usuario) => usuario.activo === true);
console.log(usuariosActivos);