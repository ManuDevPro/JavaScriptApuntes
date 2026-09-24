

/*
Ahora vamos a comprobar que puedes combinar todo.

🏋️ EJERCICIO 10 — GESTOR DE LENGUAJES

Crea este array:

const lenguajes = ["HTML", "CSS", "JavaScript"];

Realiza estas operaciones en este orden:

1️⃣ Añade "Python" al final.
2️⃣ Añade "Java" al principio.
3️⃣ Reemplaza "CSS" por "Dart".
4️⃣ Muestra el array final.
5️⃣ Muestra cuántos elementos hay usando .length.

🎯 El resultado final debería ser:

["Java", "HTML", "Dart", "JavaScript", "Python"]
*/

const lenguajes = ["HTML", "CSS", "JavaScript"];

lenguajes.push("Python");
lenguajes.unshift("Java");
lenguajes.splice(2, 1, "Dart");


console.log(lenguajes);
console.log(lenguajes.length);

