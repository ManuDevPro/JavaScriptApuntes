/*
Desestructuración de objetos

Ya sabes trabajar con objetos así:

const usuario = {
    nombre: "Manu",
    edad: 31,
    pais: "España"
};

Para obtener el nombre normalmente haces:

console.log(usuario.nombre);

Y para la edad:

console.log(usuario.edad);

Esto funciona perfectamente.

Pero JavaScript nos permite hacer algo más cómodo:

const { nombre, edad } = usuario;

Ahora tienes dos variables:

nombre → "Manu"
edad   → 31

Y puedes hacer:

console.log(nombre);
console.log(edad);
🧠 ¿Qué está pasando?

Cuando escribes:

const { nombre, edad } = usuario;

JavaScript está diciendo:

"Coge las propiedades nombre y edad del objeto usuario y créame variables con esos nombres."

Es prácticamente una forma abreviada de hacer:

const nombre = usuario.nombre;
const edad = usuario.edad;
--------------------------------------------------------------------------------------

                            CAMBIAR NOMBRES DE VARIABLES
Puedes desestructurar manteniendo el mismo nombre:

const { nombre, precio } = producto;

O cambiar los nombres:

const { nombre: nombreProducto, precio: precioProducto } = producto;

Esto es muy habitual en JavaScript profesional, especialmente cuando tienes varios objetos y quieres evitar nombres de variables ambiguos.

------------------------------------------------------------------------------------------

                              Saltarnos elementos

Ahora viene algo muy útil.

Tenemos:

const numeros = [10, 20, 30, 40];

Queremos obtener solamente:

10
30
40

Es decir, queremos saltarnos el 20.

Con destructuring podemos hacerlo dejando un espacio vacío:

const [primero, , tercero, cuarto] = numeros;

Observa:

10 → primero
20 → ❌ lo saltamos
30 → tercero
40 → cuarto

*/