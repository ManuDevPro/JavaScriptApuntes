/*
Ahora vamos a llevarlo a algo más parecido a un programa real.

Tenemos:

const precios = [10, 25, 8, 40, 15];

Queremos calcular el precio total de todos los productos.

El resultado debe ser:

98

Porque:

10 + 25 + 8 + 40 + 15 = 98
*/

const precios = [10, 25, 8, 40, 15];

const suma = precios.reduce(function(acumulador, precio){
    return acumulador + precio;
},0 );

console.log(suma);