
/*
Imagina que tienes las notas de unos alumnos:

const notas = [5, 7, 8, 10, 6];

Quieres crear un nuevo array llamado notasMejoradas donde cada nota aumente 1 punto.

Por ejemplo:
[6, 8, 9, 11, 7]

Tu misión
Usa map().

La estructura:

const notasMejoradas = notas.map(function(nota) {

});

Dentro tendrás que utilizar return.
*/

const notas = [5, 7, 8, 10, 6];

const notasMejoradas = notas.map(function(nota){
    return nota + 1;
})
console.log(notasMejoradas);