/*
find()

Imagina este array:
const numeros = [5, 12, 8, 20, 3];

Si queremos encontrar el primer número mayor que 10, usamos:

const resultado = numeros.find(function(numero) {
    return numero > 10;
});

console.log(resultado);

Resultado:
12

¿Qué está pasando?
find() recorre el array:

5  → ¿es > 10? ❌
12 → ¿es > 10? ✅

En cuanto encuentra el primero que cumple la condición, lo devuelve y se detiene.

---------------------------------------------------------------------------------------------

some()

Ahora vamos con some().

La diferencia fundamental:

find()

👉 Devuelve el elemento que encuentra.

some()

👉 Devuelve true o false.

Ejemplo:

const edades = [15, 22, 17, 30];

const hayMayorDeEdad = edades.some(function(edad) {
    return edad >= 18;
});

console.log(hayMayorDeEdad);

Resultado:

true

Porque hay al menos una edad de 18 o más.

Si fuera:

const edades = [12, 15, 16, 17];

el resultado sería:

false 
--------------------------------------------------------------------------------------------------------

every()

Ahora viene el tercero.

every() pregunta:

¿TODOS los elementos cumplen la condición?

Ejemplo:

const edades = [20, 25, 30, 19];

const todosMayoresDeEdad = edades.every(function(edad) {
    return edad >= 18;
});

console.log(todosMayoresDeEdad);

Resultado:

true

Porque todas son mayores o iguales a 18.

Pero:

const edades = [20, 25, 16, 30];

daría:

false

porque 16 no cumple.

-------------------------------------------------------------------------------------------------------

Método	               Pregunta	                                           Resultado
find()	               ¿Cuál es el primer elemento que cumple?	           Elemento
some()	               ¿Hay al menos uno que cumple?	                   true / false
every()	               ¿Todos cumplen?	                                   true / false

Y fíjate en algo importante: la estructura es prácticamente la misma. Lo que cambia es el método y lo que queremos preguntar.
*/