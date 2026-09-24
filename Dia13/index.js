/*
Spread ... y Rest ...

Hoy vamos a aprender algo muy importante en JavaScript moderno.

Lo curioso es que los dos utilizan los mismos tres puntos:

...

Pero dependiendo de dónde los uses, hacen cosas diferentes.

1️⃣ Spread ... — Expandir datos

Imagina que tenemos dos arrays:

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

Queremos unirlos.

Podríamos hacerlo de varias maneras, pero con spread:

const todos = [...numeros1, ...numeros2];

Resultado:

[1, 2, 3, 4, 5, 6]
🧠 ¿Qué significa ...numeros1?

Básicamente:

"Saca los elementos que hay dentro de numeros1 y colócalos aquí."

Visualmente:

numeros1
   ↓
[1, 2, 3]

...numeros1
   ↓
1, 2, 3

Por eso:

[...numeros1, ...numeros2]

termina siendo:

[1, 2, 3, 4, 5, 6]

El ... copia/expande el contenido dentro del nuevo array u objeto.
-----------------------------------------------------------------------------------------------------

Rest ...
... en los parámetros de una función recoge todos los argumentos en un array.
Cada llamada a la función empieza con un array nuevo.
No mezcla ni guarda los valores de llamadas anteriores.
function mostrar(...datos) {
    console.log(datos);
}

mostrar("Manu", 31, "España");
// ["Manu", 31, "España"]

Regla para recordar:

...datos = recoger los valores → meterlos en un array.




Primera regla de Rest

Con Rest dentro de los parámetros:

function mostrar(...datos) {
    console.log(datos);
}

Los valores que pasamos a la función:

mostrar("Manu", 31, "España");

se recogen dentro de datos como un array:

["Manu", 31, "España"]

Regla para tus notas:

...datos = recoger todos los argumentos → meterlos en un array.
---------------------------------------------------------------------------------------------------------

Spread ...


*/