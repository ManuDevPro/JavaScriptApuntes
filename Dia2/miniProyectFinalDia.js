
/*
Crea un programa que tenga estas variables:

const nombre = "Manu";
const edad = 30;
const tieneEntrada = true;

El programa debe tomar una decisión:

Caso 1
Si la persona tiene 18 años o más Y tiene entrada, mostrar:
Hola Manu, puedes entrar al evento.


Caso 2
Si tiene menos de 18 años, mostrar:
Hola Manu, no puedes entrar porque eres menor de edad.


Caso 3
Si tiene 18 años o más pero no tiene entrada, mostrar:
Hola Manu, no puedes entrar porque no tienes entrada.


💡 Aquí vas a utilizar:
if
else if
else
&&
boolean
template literals
*/

const nombre = "Manu";
const edad = 30;
const tieneEntrada = true;

if (edad >= 18 && tieneEntrada === true){
    console.log(`Hola ${nombre}, puedes entrar al evento.`);
} else if (edad < 18){
    console.log(`Hola ${nombre}, no puedes entrar porque eres menor de edad.`);
} else {
    console.log(`Hola ${nombre}, no puedes entrar porque no tienes entrada.`)
}