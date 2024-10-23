# FUNCIONES 
- [FUNCIONES](#funciones)
  - [Estructura de una funcion (como se crea una funcion)](#estructura-de-una-funcion-como-se-crea-una-funcion)
  - [Tipos de Argumentos y Parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y parametros Posicionales](#argumentos-y-parametros-posicionales)
    - [AQrgumentos y Parametros Nominales](#aqrgumentos-y-parametros-nominales)

Las funciones en js son `bloques de codigo ejecutable`, a los que podemos pasar parametros y operar con ellos.
nos sirve para modular (modularizar) nuestros programas y estructurarlos en bloques que `realicen una tarea concreta`, de manera que nuestro codigo sea mas legible y mantenible. 
Las funciones normalmente, al acabar su ejecucion `devuelven un valor`, que conseguimos con el parametro `return`. 
## Estructura de una funcion (como se crea una funcion)
Para crear una funcion debemos realizar los siguientes pasos.
1. hacer uso del keybord `function`.
2. darle un nombre a la funcion.
3. crear los parametros que recibira entre parentesis `()`.
4. crear el cuerpo de la funcion `{}`
```js
function miFuncion (){
    console.log("esta es mi funcion")
}
// funcion con parametros
function miFuncionParametros(a){
    console.log("tu parametro es",a)
}
// funcion con varios parametros
function variosParametros(a,b){
    console.log(a+b)
}
```
***COMO EJECUTAR UNA FUNCION***
para ejecutar una funcion debemos hacer el llamado de la misma haciendo uso unicamente de su nombre y los parametros que recibira.
```js
// Creando la funcion
function saludo(){
    console.log("hola")
}
//ejecutamos la funcion
saludo()

function saludo2(texto){
    console.log("hola: ",texto)
}
// ejecutar
saludo2("")jory
```
> [!NOTE]
> **REGLAS PARA PONER EL NOMBRE A UNA FUNCION** -

Los nombres de las funciones deben presentar acciones, por lo que deben construirse usando el `verbo` que representa la accion seguido de un `sustantivo` representara a la entidad.
```js
function crearUsuario(){

}
function enviarCorreo(){

}
```
## Tipos de Argumentos y Parametros
es la manera como se reemplazan los argumentos con los parametros
### Argumentos y parametros Posicionales
posicionales se le llama por que los argumentos tomaran los parametros en el orden que se le pase a la funcion, segun la posicion entre argumentos y parametros.
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return suma
}
// argumentos posicionales
sumaNumeros(2,6,7,8)
```
### AQrgumentos y Parametros Nominales
Se les llama nominales se les conoce a los argumentos que en su creacion se asocian a un parametro en especifico.
```js
//nominal
function registroAlumno(nombre,apellido,sexo){
    let respuesta=`${nombre},${apellido},${sexo}`
    return respuesta
}
registroAlumno(sexo="primo",nombre="edwin",apellido="del mar")
//posicional
registroAlumno("jory", "rodriguez", "todos los dias")
```
> [!INFO]
> Posicionales en orden y Nominales especificar el parametro y su valor.