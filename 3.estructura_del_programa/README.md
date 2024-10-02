# Estructura del p'rograma
## Indice
- [interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
- [Expreciones y Declaraciones](#expreciones-y-declaraciones)

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