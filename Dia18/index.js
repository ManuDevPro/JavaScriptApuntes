/*

Una función puede recibir otra función

Por ejemplo:

const ejecutar = (funcion) => {
    funcion();
};

Y podemos hacer:

ejecutar(() => {
    console.log("Hola Manu");
});

La función que estamos pasando dentro de ejecutar() se llama callback.

¿Y sabes dónde llevas días utilizando callbacks?

Aquí:

productos.map((producto) => {
    return producto.nombre;
});

Esta parte:

(producto) => {
    return producto.nombre;
}

es una función que le estamos entregando a map() para que map() la ejecute.

Lo mismo ocurre con:

filter()
reduce()
sort()
forEach()

Así que hoy vamos a ponerle nombre y entender conscientemente algo que ya llevas tiempo haciendo sin darte cuenta.

--------------------------------------------------------------------------------------------------------------------------------------

Mira esto

Ya conoces una función normal:

const sumar = (a, b) => {
    return a + b;
};

console.log(sumar(10, 5));

Esto da:

15

Hasta aquí estamos bien.

Ahora fíjate en algo:

const sumar = (a, b) => {
    return a + b;
};

La función sumar está guardada dentro de una variable.

Por eso podemos pensar:

sumar es un valor que contiene una función.

Y JavaScript permite hacer algo que al principio resulta raro:

const ejecutar = (funcion) => {
    funcion();
};

Aquí funcion no es una función que hayamos creado dentro.

Es un parámetro que va a recibir una función.

Por ejemplo:

ejecutar(sumar);

Entonces ocurre esto:

sumar → entra en el parámetro funcion

y dentro de ejecutar:

funcion();

significa:

"Ejecuta la función que me pasaron."

🧠 Y aquí está la conexión con lo que YA sabes

Cuando haces:

productos.map((producto) => {
    return producto.nombre;
});

map() recibe esta función:

(producto) => {
    return producto.nombre;
}

Por eso llevas días trabajando con callbacks sin que todavía necesitáramos ponerle nombre al concepto.

Vamos a olvidarnos del ejercicio por ahora

No quiero que escribas código todavía.

Solo quiero comprobar una cosa:

Si tengo:

const saludar = () => {
    console.log("Hola");
};

y hago:

const ejecutar = (funcion) => {
    funcion();
};

y después:

ejecutar(saludar);

¿qué crees que aparecerá en la consola?

Solo dime eso. No hay trampa. 😌

aparecerá      "Hola"
👀

Exactamente. 👏

Y ahora quiero que veas por qué, porque acabas de entender la primera pieza del concepto.

Tenemos:

const saludar = () => {
    console.log("Hola");
};

Aquí saludar contiene una función.

Después:

const ejecutar = (funcion) => {
    funcion();
};

Cuando hacemos:

ejecutar(saludar);

JavaScript hace mentalmente algo parecido a:

funcion = saludar

Por lo tanto, cuando dentro de ejecutar() escribimos:

funcion();

es como si hubiéramos escrito:

saludar();

Y por eso aparece:

Hola
🔑 La idea que quiero que te quede

Una función puede recibir otra función como argumento.

Y cuando una función recibe otra función para utilizarla, esa función recibida se llama callback.

Y ahora fíjate en esto:

Esto ya lo conocías.

productos.filter((producto) => producto.stock > 0);

Ese:

(producto) => producto.stock > 0

es un callback que le estás pasando a filter().

Así que no estamos aprendiendo una herramienta completamente nueva. Estamos poniendo nombre y entendiendo profundamente algo que ya llevas usando


Cuando escribimos:

ejecutar(() => {
    console.log("Buenos días");
});

estamos pasando una función directamente como argumento.

Dentro de ejecutar():

const ejecutar = (funcion) => {
    funcion();
};

funcion representa esa función que acabamos de pasar.

Por eso:

funcion();

termina ejecutando:

console.log("Buenos días");
🧠 Qué quiero que memorices

No memorices una definición complicada. Quédate con esta idea:

Un callback es una función que le pasamos a otra función para que esta pueda ejecutarla.

Y ahora conecta esto con lo que ya sabes:

productos
    .filter((producto) => producto.stock > 0)
    .map((producto) => producto.nombre);

filter() recibe un callback.
map() recibe un callback.

Llevas utilizando callbacks desde hace varios días.

La diferencia es que ahora ya sabes qué son y qué está ocurriendo detrás. 🔥


*/