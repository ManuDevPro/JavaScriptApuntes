
/*
Vamos a crear un pequeño sistema de notas.

Crea:

const nota = 8;

Haz que el programa muestre:

Nota	Resultado
Menor que 5	"Suspenso"
De 5 a menos de 7	"Aprobado"
De 7 a menos de 9	"Notable"
9 o más	"Sobresaliente"
*/


const nota = 8;

if (nota < 5){
    console.log("Suspenso");
} else if (nota >= 5 && nota < 7){
    console.log("Aprobado");
} else if (nota >= 7 && nota < 9){
    console.log("Notable");
}else{
    console.log("Sobresaliente");
}