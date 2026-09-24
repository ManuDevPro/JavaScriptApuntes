/*
Crea una función:

sumarTodo(...)

que pueda recibir cualquier cantidad de números y devuelva su suma.

Por ejemplo:

sumarTodo(10, 20, 30, 40)

debería devolver:

100
*/

function sumarTodo(...numeros) {
    const suma = numeros.reduce(function(acumulador, numero) {
        return numero + acumulador;
    }, 0);
    console.log(suma);
};

sumarTodo(10, 20, 30, 40);

