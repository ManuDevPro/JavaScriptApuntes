
/*
Tenemos las notas:

const notas = [3, 8, 5, 10, 4, 7, 2, 9];

Quiero que crees un nuevo array llamado:
aprobados

que contenga solamente las notas mayores o iguales a 5.

El resultado debe ser:

[8, 5, 10, 7, 9]

La estructura:

const aprobados = notas.filter(function(nota) {

});

💡 Pista: dentro del filter() necesitas un return con una condición.
*/

const notas = [3, 8, 5, 10, 4, 7, 2, 9];

const aprobados = notas.filter(function(nota){
    return nota >= 5;
});

console.log(aprobados);