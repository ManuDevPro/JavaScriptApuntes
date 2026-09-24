
/*
Crea este array de objetos:
productos

Debe tener 3 productos:
Ordenador → 1200 €
Teléfono → 800 €
Tablet → 500 €

Cada objeto debe tener:
nombre
precio

Después utiliza console.log() para mostrar:
Ordenador: 1200€
Teléfono: 800€
Tablet: 500€

💡 Puedes acceder, por ejemplo, al nombre del primer producto con:
productos[0].nombre

Y a su precio:
productos[0].precio
*/

const productos = [
    {
        nombre: "Ordenador",
        precio: 1200
    },

    {
        nombre: "Teléfono",
        precio: 800
    },

    {
        nombre: "Tablet",
        precio: 500
    },
]

console.log(`${productos[0].nombre}: ${productos[0].precio} €`);
console.log(`${productos[1].nombre}: ${productos[1].precio} €`);
console.log(`${productos[2].nombre}: ${productos[2].precio} €`);