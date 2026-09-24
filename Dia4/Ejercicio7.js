
/*
Ahora vamos a combinar for + if + else.

Tenemos:
const edades = [12, 18, 25, 16, 30, 17];

Recorre el array y muestra un mensaje para cada edad:

Si tiene 18 años o más:
18 → Mayor de edad

Si tiene menos de 18:
12 → Menor de edad

🎯 El resultado debería ser algo parecido a:
12 → Menor de edad
18 → Mayor de edad
25 → Mayor de edad
16 → Menor de edad
30 → Mayor de edad
17 → Menor de edad

💡 Vas a necesitar:
for (...)

y dentro:
if (...) {
} else {
}
*/

const edades = [12, 18, 25, 16, 30, 17];

for (let i = 0; i < edades.length; i++){

    if (edades[i] < 18) {
        console.log(`${edades[i]} -> Menor de edad`);
    } else{
        console.log(`${edades[i]} -> Mayor de edad`);
    }
}