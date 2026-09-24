/*
Tenemos:

function sumarTodo(...numeros) {
    
}

Ya sabemos que numeros será un array.

Y queremos usar reduce() para sumar todo.

Tu reto

Completa solo el interior de la función:

function sumarTodo(...numeros) {
    // escribe aquí el reduce
}
*/

function sumarTodo(...numeros) {
    const todo = numeros.reduce(function(acumulador, numero) {
        return acumulador + numero;
    }, 0);
    console.log(todo);
};
sumarTodo(2, 3, 12);