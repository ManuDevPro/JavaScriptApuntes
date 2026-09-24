
/*
Quiero que tú construyas este objeto:
persona

Debe tener:
nombre → "Manu"
edad → 31

Y un método llamado:
presentarse

Cuando ejecutes:
persona.presentarse();

debe aparecer:
Hola, soy Manu y tengo 31 años

💡 Pista
Dentro del método tendrás que utilizar:
this.nombre

y:
this.edad


Completa tú el método.
*/

const persona = {
    nombre: "Manu",
    edad: 31,

    presentarse: function(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

persona.presentarse();