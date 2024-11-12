// EJERCICIO
// Crear una funcion  que me de un saludo de bienbenida
// function saludo (){
//     console.log("Bienbenido")
// }

// let saludo=function(){
//     console.log("bienvemido")
// }
// saludo()


// binding en js lo que hace es subir las funciones declarativas a la cabecera de mi archivo.
// console.log(despedida())

// // en el caso de funciones con valor o funciones flecha el binding solo eleva al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte del archivo incluso antes de que sea creada
 

// let saludo=()=>{return "hola primo"}
// function despedida(){
//     return "adios"
// }
// console.log(saludo())

// Crear una funcion que tenga o almacene una variable contador y podamos con funciones realizar la suma +1 de esta variable y la resta +1 de esta variable ademas de poder tener una funcion que permita acceder al valor actual y poder mostrarlo.

// let contador=0
// function incremento
// return contador ++
// function decremento
// return contador --
// function valorContador
// return contador



// function contador(){
//     // variable local
//     let contador = 0
//     function incre(){
//         return contador++
    
//     }
//     function decre(){
//         return contador--
//     }
//     function valueCont(){
//         console.log(contador)
//     }
//     return {
//         valor:valueCont,
//         incre,
//         decre
//     }
// }
// let count1=contador()
// for(let i=0;i<5;i++){
//     count1.incre()
// }
// count1.valueCont()
// let count2=contador()
// for(let i=0;i<5;i++){
//     count1.decre()
// }
// count2.valueCont()


// function contador(){
//     this.contador=0
//     this.incre=function(){
//         this.contador++
//     }
//     this.decre=function(){
//         this.contador--
//     }
// }
// // realizamos la instancia
// let count1=new contador()
// console.log(count1.contador)
// count1.incre()
// console.log(count1.contador)

//prototype
function  Contador(nombre){
    this.count=0
    this.nombre=nombre
}
Contador.prototype={
    incremento:function(){this.count++},
    dcremento:function(){this.count--},
    mostrarDatos:function(){return `${this.count},${this.nombre}`},
    actualizarNombre:function(nuevoNombre){this.nombre = nuevoNombre}
}
//instanciar mi funcion
let contadorUno=new Contador("primo")
console.log(contadorUno.mostrarDatos())
contadorUno.incremento()
contadorUno.incremento()
console.log(contadorUno.mostrarDatos())
contadorUno.actualizarNombre("nadine");
console.log(contadorUno.mostrarDatos())
contadorUno.incremento()
console.log(contadorUno.mostrarDatos())
//