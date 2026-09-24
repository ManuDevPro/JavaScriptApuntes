
/*
Vamos a hacer un pequeño ejercicio de programación más real.

Tenemos:
const precios = [10, 25, 8, 40, 15, 30];

Queremos:
Quedarnos solamente con los precios mayores o iguales a 20.
A esos precios aplicarles un 10% de descuento.
Guardar el resultado en un nuevo array llamado preciosFinales.

Por ejemplo:
25 → 22.5
40 → 36
30 → 27

Resultado esperado:
[22.5, 36, 27]
💡 Pistas

Primero necesitas:
filter()

para obtener:
[25, 40, 30]

Después:
map()
para aplicar el descuento.

Para calcular un 10% de descuento puedes hacer:
precio * 0.9
*/

const precios = [10, 25, 8, 40, 15, 30];

const mayores = precios.filter(function(numero){
    return numero >=20;
});

const preciosFinales = mayores.map(function(numeroFinal){
    return numeroFinal * 0.9;
})

console.log(preciosFinales);