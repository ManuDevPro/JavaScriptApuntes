

//Arrays
const lenguajes = ["JavaScript", "Dart", "Python"];
console.log(lenguajes[2]);

// Propiedad length
console.log(lenguajes.length)//Para saber cuantas hay...



//Añadir una fruta a la lista
const frutas = ["Piña", "Manzana", "Pera"];

frutas.push("Mango");//Lo añade al final
frutas.unshift("Mango");// Lo añade al inicio
console.log(frutas);

//Eliminar el ultimo elemento:
frutas.pop()
console.log(frutas);

//Eliminar el primer elemento
frutas.shift();
console.log(frutas);


//-------------------------------------------------------------------------------------------
const frutas2 = ["Manzana", "Pera", "Mango", "Naranja"];
/*Eliminar elemento intermedio... splice() nos permite eliminar elementos específicos, incluso si están en medio del array.

["Manzana", "Pera", "Mango", "Naranja"]

Índice 2
    ↓
"Mango"

splice(2, 1)
          ↓
Eliminar 1 elemento

Resultado:
["Manzana", "Pera", "Naranja"]
*/

frutas2.splice(2,1)
/*
Significa:
2 → empieza en el índice 2
1 → elimina 1 elemento
 */
console.log(frutas2);
//-----------------------------------------------------------------------------------------------
/*
splice() no solo sirve para eliminar. También puede añadir elementos en una posición específica.

Tenemos:
const lenguajes = ["HTML", "CSS", "JavaScript"];

Queremos añadir "Python" entre "CSS" y "JavaScript".

["HTML", "CSS", "JavaScript"]

              ↓
         Añadir Python

["HTML", "CSS", "Python", "JavaScript"]

Usamos:

lenguajes.splice(2, 0, "Python");


🧠 ¿Qué significa?
splice(2, 0, "Python")
2 → posición donde empezamos
0 → eliminamos cero elementos
"Python" → elemento que añadimos
*/
const lenguajes2 = ["HTML", "CSS", "JavaScript"];
lenguajes2.splice(2, 0, "Pithon");
console.log(lenguajes2);
//----------------------------------------------------------------------------------------------

/*
splice() PARA REEMPLAZAR
Tenemos:
const colores = ["Rojo", "Azul", "Verde"];

Queremos cambiar:
Azul

por:
Amarillo

Sabemos que "Azul" está en el índice 1.

Podemos hacer:
colores.splice(1, 1, "Amarillo");
console.log(colores);

Resultado:
["Rojo", "Amarillo", "Verde"]

🧠 ¿Qué significa?
splice(1, 1, "Amarillo")
1 → empieza en el índice 1
1 → elimina 1 elemento
"Amarillo" → añade este elemento en esa posición

📌 Esto reemplaza un elemento por otro.
*/
const colores = ["Rojo", "Azul", "Verde"];
colores.splice(1, 1, "Amarillo");
console.log(colores);




//-----------------------------------------------------------------------------------------------
/*

| Método      | ¿Qué hace?              |
| ----------- | ----------------------- |
| `push()`    | ➕ Añade al final        |
| `pop()`     | ➖ Elimina del final     |
| `unshift()` | ➕ Añade al principio    |
| `shift()`   | ➖ Elimina del principio |
| `length`    | 📏 Cuenta los elementos |

*/ 
//-----------------------------------------------------------------------------------------------
/*
RESUMEN DE splice()
splice(posicion, cantidadAEliminar, elementoNuevo);

➖ Eliminar
array.splice(2, 1);
➡️ Elimina 1 elemento desde el índice 2.

➕ Añadir
array.splice(2, 0, "Nuevo");
➡️ Añade "Nuevo" en el índice 2.


🔄 Reemplazar
array.splice(2, 1, "Nuevo");
➡️ Elimina el elemento del índice 2 y pone "Nuevo".
*/