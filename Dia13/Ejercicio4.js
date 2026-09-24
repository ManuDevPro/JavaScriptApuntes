/*
Crea una función llamada sumarTodos que pueda recibir cualquier cantidad de números y los sume usando reduce().

Por ejemplo:

sumarTodos(10, 20, 30);

debe devolver:

60

Y:

sumarTodos(5, 10, 15, 20);

debe devolver:

50

Pista mínima:
function sumarTodos(...numeros) {

    aquí tienes que usar reduce()

}
*/

function sumarTodos(...numeros) {
    const todos = numeros.reduce(function(acumulador, numero) {
        return acumulador + numero
        
    }, 0);
    
    return todos
};
const resultado = sumarTodos(5, 10, 15, 20);
console.log(resultado);
