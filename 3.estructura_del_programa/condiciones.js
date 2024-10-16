// ejemplo de condicion simple
// Capturamos la edad de lo que convertimos a numero
let edad = Number(prompt("ingresa tu edad: "))
// Verificamos si el tipo de dato edad es number realmente
if (typeof edad =="number"){
// Si la comparacion es verdadera mostraremos por la consola la raiz cuadrada de edad
    console.log(edad*edad)
};

// ejemplo de una condicion simple de una sola linea
if (1+1==2) console.log("es verdad");

//Ejercicios: de condiciones
// Crear un programa que me pida un numero y me muestre por consola si es un numero par o impar
let numero = Number(prompt("ingrese un numero: ")) ;
if (numero % 2 == 0) {
  console.log("el numero es par");
}else {
  console.log("el numero es impar");
}

// EJERCICIO
//crear un programa que pida al usuario su edad y dependiendo su edad le daremos una serie de regalos
// REGALOS
/**
 * - si su edad esta entre 4 a 8 años: te ganaras un chupetin
 * - si su edad esta entre 9 a 13 años: te ganaras una pelota firmada por cuto
 * - si su edad esta entre 14 a 17 años: te ganaras un celular nokia 6101.
 * - si su edad es mayor igual a 18 : te ganaras al primo lo haces leña.
 */

let (edad = Number(prompt("Ingrece tu edad:")));

if (!Number.isNaN(edad)) {
    if (edad >= 4 && edad <= 8) {
        console.log("Te ganarás un chupetín");
    } else if (edad >= 9 && edad <= 13) {
        console.log("Te ganarás una pelota firmada por Cuto");
    } else if (edad >= 14 && edad <= 17) {
        console.log("Te ganarás un celular Nokia 6101");
    } else if (edad >= 18) {
        console.log("Te ganarás al primo, lo haces leña");
    }else{
        
    }
}