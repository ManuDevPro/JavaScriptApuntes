
//Operaciones matematicas

let numero1 = 30;
let numero2 = 5;


console.log(`El resultado de la suma es: ${numero1 + numero2}`);
console.log(`El resultado de la resta es: ${numero1 - numero2}`);
console.log(`El resultado de la multiplicación es: ${numero1 * numero2}`);
console.log(`El resultado de la división es: ${numero1 / numero2}`);


console.log(30 > 5); //True
console.log(19 < 3); //False
console.log(18>=18); //True



//operador === Significa Que pregunta si uno es EXACTAMENTE IGUAL a otro
console.log(35 === "35");//False
console.log(2 === 2);//True


//If / else
const edad = 5;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else{
    console.log("Eres menor de edad");
}


//else if
const nota = 10;

if (nota < 5) {
    console.log("Suspenso");
} else if (nota < 7) {
    console.log("Aprobado");
} else {
    console.log("Notable");
}