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
- **shift() Elimina el primer elemento de un array y lo devuelve.**
```js
let arr = [1, 2, 3];
let removed = arr.shift();  // removed = 1, arr = [2, 3]
```

- **unshift() Agrega uno o más elementos al principio de un array.**
```js
let arr = [1, 2, 3];
arr.unshift(0);  // [0, 1, 2, 3]
```

- **concat() Combina dos o más arrays en uno nuevo sin modificar los originales.**
```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2);  // [1, 2, 3, 4]
```
- **join() Une todos los elementos de un array en una cadena de texto.**
```js
let arr = ['a', 'b', 'c'];
let str = arr.join('-');  // "a-b-c"
```

- **slice() Devuelve una copia superficial de una porción de un array, desde el índice start hasta el índice end.**
```js
let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3);  // [2, 3]
```

- **splice() Cambia el contenido de un array eliminando, reemplazando o agregando elementos.**
```js
let arr = [1, 2, 3, 4];
arr.splice(2, 1, 'a', 'b');  // Elimina el 3 y agrega 'a' y 'b'. Resultado: [1, 2, 'a', 'b', 4]
```

- **forEach() Ejecuta una función en cada elemento del array (sin retornar nada).**
```js
let arr = [1, 2, 3];
arr.forEach(item => console.log(item));  // 1 2 3
```

- **map() Crea un nuevo array con los resultados de la función aplicada a cada elemento.**
```js
let arr = [1, 2, 3];
let newArr = arr.map(x => x * 2);  // [2, 4, 6]
```

- **filter() Crea un nuevo array con los elementos que pasen una condición.**
```js
let arr = [1, 2, 3, 4];
let evenArr = arr.filter(x => x % 2 === 0);  // [2, 4]
```

- **reduce() Ejecuta una función reductora sobre un array (de izquierda a derecha) para reducirlo a un solo valor.**
```js
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0);  // 10
```

- **reduceRight()Similar a reduce(), pero la función reductora se ejecuta de derecha a izquierda.**
```js
let arr = [1, 2, 3, 4];
let sumRight = arr.reduceRight((acc, curr) => acc + curr, 0);  // 10
```
- **some() Verifica si al menos un elemento en el array cumple con la condición.**
```js
let arr = [1, 2, 3, 4];
let hasEven = arr.some(x => x % 2 === 0);  // true
```
- **every() Verifica si todos los elementos en el array cumplen con la condición.**
```js
let arr = [2, 4, 6];
let allEven = arr.every(x => x % 2 === 0);  // true
```
- **find() Devuelve el primer elemento que cumple con la condición.**
```js
let arr = [1, 2, 3, 4];
let firstEven = arr.find(x => x % 2 === 0);  // 2
```

- **findIndex() Devuelve el índice del primer elemento que cumple con la condición.**
```js
let arr = [1, 2, 3, 4];
let index = arr.findIndex(x => x === 3);  // 2
```

- **includes() Verifica si un array contiene un valor específico.**
```js
let arr = [1, 2, 3];
let hasThree = arr.includes(3);  // true
```

- **indexOf() Devuelve el primer índice de un valor en el array, o -1 si no lo encuentra.**
```js
let arr = [1, 2, 3];
let index = arr.indexOf(2);  // 1
```

- **lastIndexOf() Devuelve el último índice de un valor en el array, o -1 si no lo encuentra.**
```js
let arr = [1, 2, 3, 2];
let lastIndex = arr.lastIndexOf(2);  // 3
```

- **sort() Ordena los elementos de un array en su lugar.**
```js
let arr = [3, 1, 2];
arr.sort();  // [1, 2, 3]
 ```
 
- **reverse() Invierte el orden de los elementos de un array.**
```js
let arr = [1, 2, 3];
arr.reverse();  // [3, 2, 1]
```

- **fill() Rellena los elementos de un array con un valor estático entre los índices proporcionados.**
```js
let arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);  // [1, 0, 0, 4]
```

- **flat() "Aplana" un array de arrays en un solo array (por defecto hasta una profundidad de 1).**
```js
let arr = [1, [2, 3], [4, [5]]];
let flattened = arr.flat();  // [1, 2, 3, 4, [5]]
 ```

- **flatMap() Primero mapea cada elemento usando una función y luego aplana el resultado.**
```js
let arr = [1, 2, 3];
let flatMapped = arr.flatMap(x => [x, x * 2]);  // [1, 2, 2, 4, 3, 6]
```
## Objetos
Los objetos son tipos de datos estructurados similares a las listas, para poder acceder a un elemento de la lista jv les asignaba indices, en este caso los objetos como unica diferencia de las listas nosotros podemos asignar el nombre del elemento el cual deseamos acceder a esto se le conoce como `clave:valor`

cada clave:valor es un elemento de un objeto si deseamos crear mas elementos tendremos que separarlos por comas.
### Creacion
Para crear un objeto debemos encerrar a los elementos con llaves `{}` para elementos estara conformado por su `clave:valor`.
```js
let datos_jory=["jory","rodriguez",20,"M"]
let datosJoryObjeto={
  nombre:"jory",
  apellido:"Rodriguez",
  edad:20,
  sexo:"todos los dias",
  ganado:["el primo","los chamos","las enfermeras","mineros"],
  direccion:{
    tipoCalle:"pasaje",
    nombreCalle:"Querobamba",
    numeroPuerta:322,
    numeroCduarto:5
  }
}
console.log(datosJoryObjeto)
```
## acceder a un elemento del objeto
### metodos