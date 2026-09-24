/*
Sin mirar nada, escribe una función llamada sumarTodo que:

pueda recibir cualquier cantidad de números;
utilice ...;
sume todos los números;
devuelva el resultado con return.

Por ejemplo:

sumarTodo(5, 10, 20);

debería devolver:

35

No te doy ninguna pista de sintaxis esta vez.

Escribe lo que recuerdes. Si hay algún fallo, perfecto: precisamente estamos entrenando la memoria.
*/

function sumarTodo(...numeros) {
    const resultado = numeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);
    return resultado;
};

console.log(sumarTodo(5, 10, 20));
