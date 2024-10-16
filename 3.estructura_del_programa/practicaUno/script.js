//Ejercicio 1
let num1= prompt("Ingrese el primer número:");
let num2= prompt("Ingrese el segundo número:");
if (num1*num2>100) console.log("El producto es mayor a 100") 

//Ejercicio 2
let password = prompt("Ingrese la contraseña:");
if (password === "12345") {
    console.log("Contraseña correcta")
};

//Ejercicio 3
let numero = +prompt("Ingrese un número: ");
if (numero <= 1 || numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) {
  console.log(`${n} no es un número primo.`);
} else {
  console.log(`${n} es un número primo.`);
}
