/*
Quiero que tú escribas el código.

Tenemos este array:
const nombres = ["Manu", "María", "Carlos", "Ana"];

Tu misión:
Usando forEach(), consigue que la consola muestre:
Hola Manu
Hola María
Hola Carlos
Hola Ana

No uses for.

Pista:

nombres.forEach(function(nombre) {

});
*/

const nombres = ["Manu", "María", "Carlos", "Ana"];

nombres.forEach(function(nombre){
    console.log(`Hola ${nombre}`);
})