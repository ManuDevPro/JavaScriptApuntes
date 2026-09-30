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

*/