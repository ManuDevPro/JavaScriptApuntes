
/*
Tenemos:

const numeros = [10, 25, 30, 45, 50];

Usa un for para recorrer todos los números.

Dentro del for, utiliza un if para comprobar:
Si el número es mayor o igual que 30, muéstralo en consola.

🎯 El resultado debe ser:
30
45
50


*/

const numeros = [10, 25, 30, 45, 50];

for (let i = 0; i < numeros.length; i++){

    if (numeros[i] >= 30){
        console.log(numeros[i]);
    }
}