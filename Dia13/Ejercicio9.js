
/*
Sin mirar nada:

Tenemos:

const usuario = {
    nombre: "Manu",
    edad: 31
};

Quiero crear usuarioNuevo, copiando todo lo de usuario y añadiendo:

pais: "España"
*/
const usuario = {
    nombre: "Manu",
    edad: 31
};

const usuarioActualizado = {
    ...usuario,
    pais: "España",
};
console.log(usuarioActualizado);