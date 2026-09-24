/*
Tenemos:
const numeros = [5, 12, 8, 20, 3, 15];

Quiero que obtengas:
[24, 40, 30]

Es decir:
Primero, solo mayores que 10.
Después, multiplicar esos números por 2.
Utiliza funciones flecha.

Ya tienes todas las piezas.

Hazlo tú. Si te bloqueas, ahí sí entro yo.
*/

const numeros = [5, 12, 8, 20, 3, 15];

const mayores = numeros.filter((numero) => numero > 10);
const dobles = mayores.map((numero) => numero * 2);

console.log(dobles);

/*
Ahora quiero que hagas la misma operación, pero sin crear la variable mayores.

Es decir:

numeros
   ↓
filter
   ↓
map
   ↓
resultado

Una sola expresión encadenando filter() y map().

No te doy sintaxis. Ya tienes todas las piezas.

Inténtalo.
*/
// const numeros = [5, 12, 8, 20, 3, 15];

// numeros.filter((numero) => numero > 10);
// numeros.map((numero) => numero *2);
