/*
¿Qué es un objeto?

Un objeto agrupa información relacionada mediante propiedades.

Por ejemplo:
const persona = {
    nombre: "Manu",
    edad: 30,
    lenguaje: "JavaScript",
    horasEstudio: 3
};

Aquí tenemos un objeto llamado persona.

Sus propiedades son:
nombre
edad
lenguaje
horasEstudio

Y cada propiedad tiene un valor:
nombre → "Manu"
edad → 30
lenguaje → "JavaScript"
horasEstudio → 3

Piensa en esto como una ficha:

PERSONA
----------------
Nombre: Manu
Edad: 30
Lenguaje: JavaScript
Horas: 3

🧠 ¿Cómo accedemos a una propiedad?

Utilizamos un punto .:

console.log(persona.nombre);

Resultado:
Manu

También:
console.log(persona.edad);

Resultado:
30

Y:
console.log(persona.lenguaje);

Resultado:
JavaScript
-------------------------------------------------------------------------------------

Los objetos no solamente sirven para leer información. También podemos cambiarla.

Tenemos:
const usuario = {
    nombre: "Manu",
    edad: 30
};

Podemos cambiar la edad:
usuario.edad = 31;

Ahora:
console.log(usuario.edad);

muestra:
31

Y también podemos modificar texto:
usuario.nombre = "Carlos";
-------------------------------------------------------------------------------------------

Un objeto puede ganar nuevas propiedades después de haber sido creado.

Por ejemplo:
const usuario = {
    nombre: "Manu",
    edad: 30
};

Podemos añadir una propiedad:
usuario.lenguaje = "JavaScript";

Y ahora el objeto tiene:
nombre
edad
lenguaje

También podemos añadir:
usuario.horasEstudio = 3;

No necesitamos modificar el const. Estamos modificando el contenido del objeto, no cambiando la variable para que apunte a otro objeto.
-------------------------------------------------------------------------------------------------------

Objetos dentro de arrays

Ahora viene una estructura MUY importante para programación real.

Hasta ahora teníamos:
const nombres = ["Manu", "María", "Carlos"];

Un array de textos.

Pero podemos tener un array de objetos:
const usuarios = [
    {
        nombre: "Manu",
        edad: 31
    },
    {
        nombre: "María",
        edad: 25
    },
    {
        nombre: "Carlos",
        edad: 28
    }
];

Ahora tenemos:
usuarios
   ↓
[ objeto, objeto, objeto ]
     ↓
   Manu
   31

Para acceder al primer usuario:
console.log(usuarios[0]);

Para acceder solamente a su nombre:
console.log(usuarios[0].nombre);

Resultado:
Manu

Y para acceder a la edad de María:
console.log(usuarios[1].edad);

Resultado:
25

🧠 Fíjate en esto
Primero usamos [ ] para acceder al elemento del array:

usuarios[0]

Después usamos . para acceder a una propiedad del objeto:

usuarios[0].nombre

Esto:
usuarios[0].nombre
   ↓      ↓     ↓
 array   objeto propiedad
-----------------------------------------------------------------------------------------------

Objetos + forEach()

Ahora vamos a hacer algo mucho más interesante.

Acabamos de escribir:
console.log(`${productos[0].nombre}: ${productos[0].precio} €`);
console.log(`${productos[1].nombre}: ${productos[1].precio} €`);
console.log(`${productos[2].nombre}: ${productos[2].precio} €`);

Pero imagina que tenemos 100 productos.

No queremos escribir 100 console.log().

Aquí podemos combinar lo que aprendiste ayer:
forEach()

Por ejemplo:
productos.forEach(function(producto) {
    console.log(`${producto.nombre}: ${producto.precio} €`);
});

🧠 ¿Qué ocurre?
forEach() pasa por cada objeto.

Primera vuelta:
producto = {
    nombre: "Ordenador",
    precio: 1200
}

Entonces:
producto.nombre

es:
Ordenador

Y:
producto.precio

es:
1200

Después pasa al teléfono y finalmente a la tablet.
*/