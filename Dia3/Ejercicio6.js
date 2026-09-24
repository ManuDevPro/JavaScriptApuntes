

/*
Ahora vamos a juntar todo lo aprendido.

Crea este array:

const tareas = ["Estudiar JavaScript", "Hacer ejercicio", "Trabajar"];

Haz lo siguiente:

1. Añade al final:
"Descansar"
2. Añade al principio:
"Desayunar"
3. Elimina "Trabajar"

⚠️ Pista: por ahora no hemos aprendido a eliminar un elemento específico del medio. Así que piensa en qué posición tendrá "Trabajar" después de añadir los elementos.

4. Muestra:
El array final.
Cuántas tareas quedan usando .length.
*/

const tareas = ["Estudiar JavaScript", "Hacer ejercicio", "Trabajar"];

tareas.pop();
tareas.push("Descansar");
tareas.unshift("Desayunar");

console.log(tareas);
console.log(tareas.length);

