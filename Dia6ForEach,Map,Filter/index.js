/*
forEach() → recorrer elementos
map() → transformar elementos y crear un nuevo array
filter() → seleccionar elementos según una condición

Vamos uno por uno, sin correr.
🟢 PARTE 1 — forEach()

Ya sabes hacer esto:
const numeros = [10, 20, 30, 40];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

Con forEach() podemos hacerlo de una manera más sencilla:

const numeros = [10, 20, 30, 40];

numeros.forEach(function(numero) {
    console.log(numero);
});

¿Qué está pasando?
forEach() significa básicamente:
"Haz esto con cada elemento del array."

Tenemos:
numeros.forEach(function(numero) {
    console.log(numero);
});

numero representa cada elemento.

Primera vuelta:
numero = 10

Segunda:
numero = 20

Tercera:
numero = 30

Cuarta:
numero = 40

Y por eso imprime:
10
20
30
40


IMPRIMIR VARIOS ELEMENTOS:

Ya tienes claro algo importante:

forEach(function(elemento, indice) {
    
})

elemento → el valor actual
indice → la posición actual
*/
//----------------------------------------------------------------------------------------------
/*

map() sirve para transformar un array y crear otro array nuevo.

Por ejemplo:
const numeros = [1, 2, 3, 4];

const dobles = numeros.map(function(numero) {
    return numero * 2;
});
console.log(dobles);

Resultado:
[2, 4, 6, 8]


Fíjate en la diferencia:
forEach()
Hace algo con cada elemento:

numeros.forEach(function(numero) {
    console.log(numero);
});

map()
Transforma cada elemento y devuelve un nuevo array:

const dobles = numeros.map(function(numero) {
    return numero * 2;
});

El return aquí es fundamental.
*/

//-----------------------------------------------------------------------------------------------------

/*
Ahora vamos con filter().

filter() sirve para quedarnos solamente con los elementos que cumplen una condición.

Por ejemplo, tenemos:
const numeros = [3, 8, 12, 5, 20, 7];

Queremos quedarnos solamente con los números mayores que 10:

const mayores = numeros.filter(function(numero) {
    return numero > 10;
});

console.log(mayores);

Resultado:
[12, 20]
🧠 La diferencia importante

map():
"Transforma todos los elementos."

[1, 2, 3]
↓
[2, 4, 6]

filter():
"Selecciona algunos elementos."

[1, 2, 3, 4, 5]
↓
[2, 4]


Ya tienes las tres herramientas principales de hoy:

Método	¿Para qué sirve?
forEach()  	Recorrer un array
map()	Transformar cada elemento
filter()	Seleccionar elementos que cumplen una condición


🧠 Qué quiero que recuerdes

filter() pregunta a cada elemento:

"¿Cumples esta condición?"

Si devuelve true, entra en el nuevo array.

return nota >= 5;

Por ejemplo:
3  → false ❌
8  → true  ✅
5  → true  ✅
10 → true  ✅
*/