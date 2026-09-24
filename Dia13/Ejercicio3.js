/*
Modificar usando Spread

Ahora vamos a hacer algo muy utilizado en programación real.

Tenemos:

const usuario = {
    nombre: "Manu",
    edad: 31,
    pais: "España"
};

Crea un nuevo objeto llamado usuarioActualizado que:

Mantenga nombre.
Mantenga edad.
Cambie pais a "Francia".

⚠️ No modifiques directamente usuario.

El resultado debe ser:

{
    nombre: "Manu",
    edad: 31,
    pais: "Francia"
}
*/

const usuario = {
    nombre: "Manu",
    edad: 31,
    pais: "España"
};

//Cambiamos el pais y lo demas se mantuvo
const usuarioActualizado = {
    ...usuario,

    pais: "Francia",
};
console.log(usuarioActualizado);