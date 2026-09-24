/*
Spread con objetos

Ahora vamos a hacer exactamente lo mismo, pero con objetos.

Tenemos:
const usuario = {
    nombre: "Manu",
    edad: 31
};

const datosExtra = {
    pais: "España",
    lenguaje: "JavaScript"
};

Crea un nuevo objeto llamado perfilCompleto que contenga todos los datos de los dos objetos.

El resultado debe ser:
{
    nombre: "Manu",
    edad: 31,
    pais: "España",
    lenguaje: "JavaScript"
}
*/

const usuario = {
    nombre: "Manu",
    edad: 31
};

const datosExtra = {
    pais: "España",
    lenguaje: "JavaScript"
};

const perfilCompleto = {...usuario, ...datosExtra};
console.log(perfilCompleto);