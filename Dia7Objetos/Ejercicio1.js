
/*
Crea un objeto llamado:
usuario

con estas propiedades:
nombre → "Manu"
edad → 30
pais → "España"
lenguaje → "JavaScript"

Después utiliza console.log() para mostrar solamente el nombre y el lenguaje.

La estructura inicial sería:
const usuario = {
    
};

💡 Recuerda que las propiedades se escriben así:
nombre: "Manu"
*/

const usuario = {
    nombre: "Manu",
    edad: 30,
    pais: "España",
    lenguaje: "JavaScript",
}
console.log(`El nombre es: ${usuario.nombre}`);
console.log(`El lenguaje es: ${usuario.lenguaje}`);