/*
Sin mirar apuntes, crea un código que:

tenga este array:
const numeros = [5, 12, 8, 20, 3, 15];
utilice .filter()
se quede únicamente con los números mayores que 10
guarde el resultado en una variable llamada mayores
haga console.log(mayores)

No te doy la solución.
*/

const numeros = [5, 12, 8, 20, 3, 15];

const mayores = numeros.filter(function(numero) {
    return numero > 10;
});
console.log(mayores);