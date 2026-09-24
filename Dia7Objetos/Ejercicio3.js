
/*
Partimos de este objeto:
const usuario = {
    nombre: "Manu",
    edad: 31
};

Quiero que añadas dos propiedades nuevas:
lenguaje → "JavaScript"
horasEstudio → 3

Después muestra:
Lenguaje: JavaScript
Horas de estudio: 3

💡 Recuerda la forma:
usuario.propiedad = valor;
*/

const usuario = {
    nombre: "Manu",
    edad: 31,
}

usuario.lenguaje = "JavaScript";
usuario.horasEstudio = 3;

console.log(`Lenguaje: ${usuario.lenguaje}`);
console.log(`Horas de estudio: ${usuario.horasEstudio}`);