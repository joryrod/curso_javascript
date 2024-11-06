# FUNCIONES 
- [FUNCIONES](#funciones)
  - [Estructura de una funcion (como se crea una funcion)](#estructura-de-una-funcion-como-se-crea-una-funcion)
  - [Tipos de Argumentos y Parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y parametros Posicionales](#argumentos-y-parametros-posicionales)
    - [AQrgumentos y Parametros Nominales](#aqrgumentos-y-parametros-nominales)
  - [Tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
    - [Funciones como valor](#funciones-como-valor)
    - [Funcion como declaracion](#funcion-como-declaracion)
    - [Funcion de flecha (arrow function)](#funcion-de-flecha-arrow-function)
    - [Diferencias](#diferencias)
    - [binding](#binding)
  - [la pila de llamadas (call stack)](#la-pila-de-llamadas-call-stack)
  - [CLOSURE o Funciones de Cierre (Funciones que retorna funciones)](#closure-o-funciones-de-cierre-funciones-que-retorna-funciones)
    - [Tipo Clase](#tipo-clase)
    - [prototype (tarea- averiguar y sus ejemplos)](#prototype-tarea--averiguar-y-sus-ejemplos)

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

## Tipos de funciones por su notacion
### Funciones como valor
en este caso se crea una funcion como si fuera el valor de un enlace.
```js
let saludo=function(){
    console.log("bienvemido")
}
saludo()
```
en este caso el nombre de la funcion sera el nombre que le pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentesis.

al igual que una funcion clasica podemos pasarle parametros.

### Funcion como declaracion
se le conoce como funcion `declarativa` a la manera clasica de como creamos una funcion.
```js
function saludo(){
    return "saludi a todos"
}
console.log(saludo())
```
 ### Funcion de flecha (arrow function)
 Esta funcion es introducida a partir de la version de ecmaScript 5 `es5`.
 se implemento para la creacion y ejecucion rapida y mas entendible de las funciones.
 la funcion flecha evita la `verbosidad` en js.
 >[!NOTE]
 > `verbosidad` o `verboso` se utiliza en la programacion para referirce a un codigo que necesita demaciadas lineas de codigo o necesita cumplir estrictamente una serie de reglas, podemos comparar la `verbosidad` a un texto demaciado extenso o redundante.

Se crea de la misma manera que una funcion como valor, eso quiere decir que la funcion flecha sera el valor de un enlsace.

La funcion flecha tiene la siguiente estructura.
el parametro seguido del simbolo flecha `=>` y del cuerpo de ser necesario o solo de codigo que se retornara.
```js
function saludo(){
    return "hola mundo"
}
console.log(saludo)


- arrow fuction

let saludo=()=>("hola mundo")
console.log(saludo())


let mensaje=texto=>console.log("hola", texto)
console.log(mensaje("el primo"))


// en el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo
let registroUsuario=(nombre,apellido)=>{
    let alumno=`${nombre},${apellido}`
    return alumno
}
console.log(registroUsuario("edwin","cachondo"))
```
### Diferencias 
las diferencias que tenemos al momento de crear una funcion declarativa , funcion como valor y flecha esel binding
### binding
es una tecnica que guarda las funciones y variables (enlaces) al principio del archivo js.
```js
function saludo(){
    return "hola primo"
}
function despedida(){
    return "adios primo"
}
```
```js
saludo()
despedida()
```

## la pila de llamadas (call stack)
es una tecnica que se usa para controlar de manera correcta la ejecucion de una funcion. 

**averiguar sobre LFO**

```js
//programa que haga una ensalada
function cortarTomate() {
    console.log("cortando tomates")
}
function cortarLechuga() {
    console.log("cortando lechuga")
}
function cortarPepino() {
    console.log("cortando pepino para el primo")
}
function cortarLimon() {
    console.log("cortando limon")
}
function prepararEnsalada() {
    cortarTomate()
    cortarLechuga()
    cortarPepino()
    cortarLimon()
    console.log("mezclando las verduras")
}
function comer() {
    prepararEnsalada()
    console.log("tragando la ensalada")
}
comer()
```
## CLOSURE o Funciones de Cierre (Funciones que retorna funciones)
Un `closure` es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el keyword `return`.

Antes de que aparezca la version `ecma 6` los `closure` eran un patron creacional que nos permitia modularizar buestro codigo, en lugar de usar las `clases`, que eran populares en otros lenguajes pero que jv aun no lo implementan.
```js
// una funcion que retorna otra funcion (por lo genenral es una funcion anonima)
function retornaValor(n){
    return n+1
}
// llamando a la funcion clasica
retornaValor(10)

// Funcion Closure
fuction retornaValor(n){
    return fuction(){
        return n+1
    }
}
// llamando a la funcion closure
retornaValor(10)()
```
> [!NOTE]
> Las funciones `closure`son usadas por que pueden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padre por cada llamada que se realize.

### Tipo Clase
son funciones cuyo uso son iguales a las clases dentro de la ejecucion de una clase tenemos lo que se llama como `instancia` en js tenemos funciones `closure` que se pueden instanciar al igual que una clase, la diferencia con las funciones `closure` clasicas es que en esta hacemos uso de la palabra reservada `keyword` llamada `this`.
```js
function contador(){
    this.contador=0
    this.incre=function(){
        this.contador++
    }
    this.decre=function(){
        this.contador--
    }
}
// realizamos la instancia
let count1=new contador()
console.log(count1.contador)
count1.incre()
console.log(count1.contador)

for(let i=0;i>5;i++){
    count1.incre()
}
```

> [!NOTE]
> La funcion closure de tipo clase no hace uso de `return` en sus funciones al hacer us de `this` casa funcion o variable estara enlazada al objeto que se cree.

> [!WARNING]
> El problema principal de este tipo de funcion, es que cuando creamos un nuevo objeto a partir de la funcion tipo clase reservara espacio en memoria para toda la clase y sus valores creados eso quiere decir variables y funciones, cada vez que llamamos a una funcion esta se replica en memoria.

### prototype (tarea- averiguar y sus ejemplos)