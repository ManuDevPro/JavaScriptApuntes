
/*
crea usuarioNuevo usando Spread para que el resultado tenga:

nombre: "Manu"
edad: 32

Solo escribe el código de usuarioNuevo.
*/



const usuario = {
    nombre: "Manu",
    edad: 31
};

const cambios = {
    edad: 32
};


const usuarioNuevo = {
    ...usuario,
    ...cambios
};
console.log(usuarioNuevo);
