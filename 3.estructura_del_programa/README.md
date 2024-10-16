# Estructura del programa
## Indice
- [Estructura del programa](#estructura-del-programa)
  - [Indice](#indice)
  - [Interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expreciones y Declaraciones](#expreciones-y-declaraciones)
  - [El Entorno](#el-entorno)
  - [Control de flujo](#control-de-flujo)
    - [Ejecucion Condiconal](#ejecucion-condiconal)

## Interaccion basica con el usuario
Podemos interactuar con  el usuario desde js, utilizando un metodo sencillol que biene implementando en los navfegadores.

El metodo es conocido como `window` o el metodo de ventana este metodo en realidad es un objeto que copntiene o almacena varias funciones entre ellas las de mostrar mensajes o pedir datos al usuario.
- **alert** - esta funcion nos muestra un mensaje en pantalla.
```js
window.alert("mensaje")
```
- **confirm** - preguntar al usuario y ofreser dos botones que se traducen en valores booleanos `aceptar` (true) y `cancelar` o `cerrar` (falce)
```js
window.confirm("quieres ser mi enamorada?")
// si deseamos capturar la respuesta almacenaremos el codigo en una variable.
respuesta=window.confirm("quieres ser mi enamorada?")
```
- **prompt** pregunta al usuario y espera que se ingrese una respuesta.
```js
windos.prompt("Como te llamas?")
// si deseamos almacenar la respuesta usaremos una variable .
respuesta=window.confirm("quieres ser mi enamorada?")
```
 ## Expreciones y Declaraciones
 - **Expreciones** - en js un fragmento de codigo que produce un valor es llamada `Exprecion`, Tambien se dice que una `Exprecion` es el fragmento de una `oracion`.
```js
1
"hola"
3*6
5>7
!true
```
- **Declaraciones** - en js es una oracion
```js
!true;
let estado=!false;
```
cuando creamos un valor estos valores son volatiles solo si existen en la ejecucion del programa y solo cuando son llamados.
El bindings o enlace es la maneradejs recuerda los valores y mantiene un estado interno asi como la reautilización de valores.

**como usamos los bindings en jv**
para usar el bindings primero debemos usar la palabra reservada o `keyword` de nombre `let`, despues debemos darle un nombre para identificar el enlace luego asignarle el valor.
```js
// este es un enlace que puede apuntar a varios valores como un pulpito con muchos brazos .
let edadPersona = 34
// si deseamos que nuestro enlace solo apunte a un valor osea un pulpito con un bracito entonces para crear este enlace debemos hacer uso del keywor const
const edad=45
// este enlace siempre apuntara al valor 45 no podra modificar su enlace a otro valor
```

>[!NOTE]
> **¿Que nombre ponerle a nuestros Enlaces?** - el nombre de un enlace debera describir el valor al que esta enlasado y debera estar escrita en `camelCase`

```js
// quiero crear un enlace que tenga el valor de la fecha actual
// incorrecto
let yyyymmdd="200240910"
// correcto
let fechaActual="20240910"
```
## El Entorno
el entorno es conocido como el momento en el que se ejecuta o inicia un archivo en javascrip.
el entorno al crearce no se crea vacio dentro del entorno se crearan la coleccion de enlaces y valores.
**Tarea** - Averiguar mas sobre la ejecucion en linea de los entornos en js

## Control de flujo
Una sentencia se ejecuta como si fuera una historia de arriba a abajo.
por ejemplo:
```js
let elNumero = prompt("Elije un numero")
console.log(`tu numero es la raiz cuadrada de: ${elNumero*elNumero}`)
// primero le pide al usuario un numero y despues muestra un mensaje y el cuadrado de ese numero
```

### Ejecucion Condiconal
hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamo mostrar segun una condición.

**Como Creamos una condicion en js:**

la ejecucion condicional se crea con la palabra reservada (keyword) `if` a continuacion de una `condicion` en llaves `{}` se escribira el cuerpo del codigo que deseo ejecutar en caso la condicion sea `verdad`.

- **condición simple `if`**

```js
let comparacion=5>4
if true{
  prompt("escribe tu nombre")
}
```
**Condicion de doble evaluacion `if else`**
existen casos en los que tendremos que ejecutar un codigo si es verdad pero tambien si es falso, ejecucion condicional de dos caminos.
```js
let edadPersona = 16;
if (edadPersona >= 18){
  console.log("ere mayor de edad");
}else {
  console.log("eres menor de edad");
}
```
**condicion multiple `if else if`**
se utiliza cuando se tiene que evaluar y devolver varias opciones o multiples  respuesta 
```js
let total_compra=30
if (total_compra > 50){
  console.log(`tiene un descuento del 10% ${total_compra*0.10}`)
}
else if (total_compra>100 && total_compra<500){
  console.log(`tienes un descuento del 20% ${total_compra*0.20}`)
}else{
  console.log(`tienes un descuento del 50% ${total_compra*0.50}`)
}
```