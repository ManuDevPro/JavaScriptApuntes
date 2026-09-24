/*

Partimos de:
const usuario = {
    nombre: "Manu",
    edad: 30,
    pais: "España"
};

Quiero que hagas dos modificaciones:
Cambia edad a 31.
Cambia pais a "Francia".

Después muestra:
Edad: 31
País: Francia
*/

const usuario = {
    nombre: "Manu",
    edad: 30,
    pais: "España"
};

usuario.edad = 31;
usuario.pais = "Francia";

console.log(`Edad: ${usuario.edad}`);
console.log(`País: ${usuario.pais}`);