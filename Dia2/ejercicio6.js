
/*
Crea una variable:

const temperatura = 25;

Haz que JavaScript diga:

Si la temperatura es menor de 10 → "Hace frío 🥶"
Si la temperatura es menor de 25 → "La temperatura es agradable 🙂"
En cualquier otro caso → "Hace calor ☀️"
*/


const temperatura = 25;

if (temperatura < 10) {
    console.log("Hace frío");
} else if (temperatura < 25){
    console.log("La temperatura es agradable");
} else{
    console.log("Hace calor");
}