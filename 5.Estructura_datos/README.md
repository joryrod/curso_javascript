## Indice
- [Estructura de datos](#estructura-de-datos)
  - [Lista o Array](#lista-o-array)
    - [Creacion](#creacion)
    - [acceder a un elemento array](#acceder-a-un-elemento-array)
    - [metodos](#metodos)
  - [Objetos](#objetos)
    - [Creacion](#creacion-1)
  - [acceder a un elemento del objeto](#acceder-a-un-elemento-del-objeto)
    - [metodos](#metodos-1)
# Estructura de datos
a parte de los tipos de datos primitivos, js nos proporciona los tipos de datos complejos conocidos tambien como datos esctructurados o estructura de datos.
Para poder trabajar con estos tiposde datos deberemos conocer la forma de representarlos en la memoria de nuestra maquina.
js trabaja con dos tipos de datos estructurados que trabajan de manera independiente o en conjunto.
son los siguientes.

## Lista o Array
las listas en jv son  un tipo de datos estructurado que nos permite almacenar distintos tipos de datos primitivos separados por comas, cada tipo de datos que se almacene en una lista se lee como elemento.

Asi cada elemento estara separado por una coma
### Creacion
primero debemos crear un enlace(una variable) y luego le asignamos la lista que se creo con `corchetes []`, los elementos estaran dentro de los corchetes separados por comas.
```js
// estoy creando una lista vacia
let miLista=[]
// Creando una lista de numeros
let numeros=[2,3,4,5,6]
// Creando una lista de nombres
let numeros=["edwin","jory","adan","nadine"]
// crear una lista mixta
let mixta=[4,"hola",falce,["hola","mundo"]]
``` 
### acceder a un elemento array
para poder acceder a un elemento del array debemos entender que jv asignara por cada elemento un indice que nos permitira acceder a un elemento en especifico este indice es incremental y comensara del cero con el primer elemento, el ultimo elemento sera la cantidad de elementos menos uno.
```js
let numeros=[2,4,8,6,26,94,5]
console.log(numero[2])
```
existe otra manera de acceder a los elementos de una lista, esto se logra recorrientdo cada elemento de una lista esto se logra con un bucle `for`
```js
for (let i=0;i<5;i++){
    console.log(vocales[i])
```
### metodos
los metodos son funciones que nos permiten crear, actualizar y eliminar los elementos de una lista, todas las variables que almacenen una lista nos permiten acceder a sus metodos poniendo un punto despues del nombre de la variable.
- metodo para recuperar la longitud de elementos que tiene una lista
```js
let numeros=[1,2,3,4,5]
numeros.length
```
- metodo para agregar un elemento al final de la lista
```js
let vocales=["a"]
numeros.push("e")
```
- metodo para eliminar el ultimo elemento de una lista
```js
let vocales=["a","e"]
numeros.pop()
```
### tarea averiguar que otros metodos existen para el tratamiento de lsitas en jv

## Objetos
### Creacion
## acceder a un elemento del objeto
### metodos