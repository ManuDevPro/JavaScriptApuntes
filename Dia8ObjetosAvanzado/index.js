
/*
Métodos dentro de objetos + this

Hasta ahora hemos hecho objetos así:

const usuario = {
    nombre: "Manu",
    edad: 31,
    lenguaje: "JavaScript"
};

Esto contiene datos.

Pero un objeto también puede contener funciones.

Por ejemplo:

const usuario = {
    nombre: "Manu",
    edad: 31,

    saludar: function() {
        console.log("Hola");
    }
};

Ahora saludar es una función que pertenece al objeto.

A una función dentro de un objeto la llamamos normalmente método.

🧠 ¿Cómo ejecutamos el método?

Igual que accedíamos a una propiedad, usamos .:

usuario.saludar();

Resultado:

Hola

Fíjate en la diferencia:

usuario.nombre

→ estamos obteniendo un dato.

Mientras:

usuario.saludar()

→ estamos ejecutando una acción.

🟡 Ahora aparece this

Aquí viene lo interesante.

Podemos hacer:

const usuario = {
    nombre: "Manu",

    saludar: function() {
        console.log(`Hola, soy ${this.nombre}`);
    }
};

Y:

usuario.saludar();

Resultado:

Hola, soy Manu
¿Qué significa this?

Dentro de ese método:

this.nombre

significa:

"el nombre de este objeto"

En este caso:

this → usuario
this.nombre → usuario.nombre

Por eso:

console.log(`Hola, soy ${this.nombre}`);

es equivalente a:

console.log(`Hola, soy ${usuario.nombre}`);

Pero this hace que el método pueda trabajar con el objeto al que pertenece, sin tener que escribir su nombre directamente.

----------------------------------------------------------------------------------------------------------

Un método que modifica el objeto

Ahora vamos a hacer algo más interesante.

Un método puede modificar las propiedades del propio objeto.

Tenemos:

const persona = {
    nombre: "Manu",
    edad: 31,

    cumplirAnios: function() {
        this.edad = this.edad + 1;
    }
};

Si hacemos:

persona.cumplirAnios();

La edad pasa de:

31

a:

32

Porque:

this.edad = this.edad + 1;

significa:

"Coge la edad de este objeto y súmale 1."

También podríamos escribir:

this.edad++;

--------------------------------------------------------------------------------------------------

Métodos con parámetros

Ahora vamos a subir un nivel.

Los métodos también pueden recibir parámetros, igual que las funciones que aprendiste en el Día 5.

Por ejemplo:

const usuario = {
    nombre: "Manu",
    edad: 31,

    cumplirAnios: function(cantidad) {
        this.edad = this.edad + cantidad;
    }
};

Ahora podemos hacer:

usuario.cumplirAnios(5);

Y la edad pasaría de:

31 → 36

Porque:

this.edad = this.edad + cantidad;

es:

31 + 5 = 36

---------------------------------------------------------------------------------------------
Métodos que devuelven información

Hasta ahora nuestros métodos han hecho cosas:

this.edad++;

o:

this.edad += cantidad;

Pero también podemos hacer que un método devuelva un resultado utilizando return.

Por ejemplo:

const usuario = {
    nombre: "Manu",
    edad: 31,

    obtenerInfo: function() {
        return `Soy ${this.nombre} y tengo ${this.edad} años`;
    }
};

Ahora podemos hacer:

const informacion = usuario.obtenerInfo();

console.log(informacion);

Resultado:

Soy Manu y tengo 31 años

Esto conecta directamente con lo que aprendiste en el Día 5:

return

Un método puede calcular algo y devolverlo para que nosotros decidamos qué hacer con ese resultado.
*/