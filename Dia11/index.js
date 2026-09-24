/*
reduce()

Hasta ahora has utilizado:

forEach() → recorrer elementos
map() → transformar elementos
filter() → filtrar elementos
find() → encontrar un elemento
some() → comprobar si alguno cumple
every() → comprobar si todos cumplen

Ahora aprenderemos:

reduce() → convertir muchos elementos en un único resultado

Por ejemplo:

const numeros = [5, 10, 15, 20];

Queremos conseguir:

50

Porque:

5 + 10 + 15 + 20 = 50
🧠 ¿Qué hace reduce()?

Piensa en un acumulador.

Va recorriendo el array y va guardando el resultado:

0 + 5  = 5
5 + 10 = 15
15 + 15 = 30
30 + 20 = 50

Por eso normalmente tenemos dos elementos dentro de reduce():

acumulador
numero
acumulador → guarda lo que llevamos acumulado.
numero → es el elemento actual del array.
✏️ Ejemplo completo
const numeros = [10, 20, 30, 40];

const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log(suma);

Resultado:

100
¿Por qué ponemos 0 al final?
}, 0);

Ese 0 es el valor inicial del acumulador.

Entonces comienza así:

acumulador = 0

Y después:

0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
60 + 40 = 100
*/