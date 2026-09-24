/*
Tenemos este objeto:

const persona = {
    nombre: "Carlos",
    edad: 28,
    ciudad: "Madrid"
};

Quiero que extraigas solamente:
nombre
ciudad

Y después las muestres:
Carlos
Madrid

Empieza tú.

La estructura que necesitas es:

const { ______, ______ } = persona;

console.log(nombre);
console.log(ciudad);
*/

const persona = {
    nombre: "Carlos",
    edad: 28,
    ciudad: "Madrid"
};

const {nombre, ciudad} = persona;

console.log(nombre);
console.log(ciudad);