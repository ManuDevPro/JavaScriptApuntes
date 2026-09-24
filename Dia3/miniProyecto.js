/*
📋 GESTOR DE TAREAS

Ahora vamos a usar todo lo aprendido sobre Arrays.

Crea un programa con este array:
const tareas = [
    "Estudiar JavaScript",
    "Hacer ejercicio",
    "Practicar programación"
];


Tu misión:
➕ Añade "Crear un proyecto" al final.
➕ Añade "Desayunar" al principio.
🔄 Reemplaza "Hacer ejercicio" por "Estudiar Dart".
➖ Elimina "Practicar programación".
📏 Muestra el array final.
🔢 Muestra cuántas tareas quedan.


💡 Vas a necesitar:
push()
unshift()
splice()
length
console.log()
*/

const tareas = [
    "Estudiar JavaScript",
    "Hacer ejercicio",
    "Practicar programación"
];

tareas.push("Crear un proyecto");
tareas.unshift("Desayunar");
tareas.splice(2, 1, "Estudiar Dart");
tareas.splice(3, 1);

console.log(tareas);
console.log(tareas.length);