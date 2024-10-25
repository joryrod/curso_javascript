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
console.log(despedida())

let saludo=()=>{return "hola primo"}
function despedida(){
    return "adios"
}
console.log(saludo())
