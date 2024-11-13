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
    - [RECURSION EN FUNCIONES (tarea)](#recursion-en-funciones-tarea)
    - [FUNCIONES CALLBACKS(tareas)](#funciones-callbackstareas)
    - [CLASES](#clases)
    - [ESTRUCTURA DE UNA CLASE EN JAVASCRIPT](#estructura-de-una-clase-en-javascript)

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
Prototype en Java es un patrón de diseño creacional que permite copiar objetos sin depender de sus clases específicas. Esto es útil cuando se desea crear nuevas instancias de objetos similares sin tener que reconstruirlos desde cero. En Java, el patrón Prototype se implementa a menudo mediante la interfaz Cloneable y el método clone().

Aquí tienes un ejemplo básico de cómo podrías implementar el patrón Prototype en Java:

1. Definición de la clase base que implementa Cloneable

```js
// Clase abstracta que implementa Cloneable

abstract class Shape implements Cloneable {
    private String id;
    protected String type;

    abstract void draw();

    public String getType(){
        return type;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    // Implementación del método clone
    public Object clone() {
        Object clone = null;
        try {
            clone = super.clone();
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
        return clone;
    }
}
```

2. Clases concretas que extienden la clase base

```js
// Clase que representa un Círculo

class Circle extends Shape {
    public Circle() {
        type = "Círculo";
    }

    @Override
    void draw() {
        System.out.println("Dibujando un Círculo");
    }
}

// Clase que representa un Cuadrado
class Square extends Shape {
    public Square() {
        type = "Cuadrado";
    }

    @Override
    void draw() {
        System.out.println("Dibujando un Cuadrado");
    }
}
```

3. Clase de prototipo de Shape que almacenará los objetos prototipo

```js
import java.util.Hashtable;

class ShapeCache {
    private static Hashtable<String, Shape> shapeMap = new Hashtable<>();

    public static Shape getShape(String shapeId) {
        Shape cachedShape = shapeMap.get(shapeId);
        return (Shape) cachedShape.clone();
    }

    // Cargar los objetos prototipo en caché
    public static void loadCache() {
        Circle circle = new Circle();
        circle.setId("1");
        shapeMap.put(circle.getId(), circle);

        Square square = new Square();
        square.setId("2");
        shapeMap.put(square.getId(), square);
    }
}
```

4. Ejemplo de uso del patrón Prototype

```js
public class PrototypePatternDemo {
    public static void main(String[] args) {
        // Cargar los prototipos en caché
        ShapeCache.loadCache();

        // Obtener un clon de Círculo y Cuadrado
        Shape clonedShape1 = ShapeCache.getShape("1");
        System.out.println("Forma : " + clonedShape1.getType());
        clonedShape1.draw();

        Shape clonedShape2 = ShapeCache.getShape("2");
        System.out.println("Forma : " + clonedShape2.getType());
        clonedShape2.draw();
    }
}
```
Explicación

1. `Shape`: Clase base abstracta que implementa Cloneable y tiene un método clone() para crear una copia del objeto.


2. `Circle y Square`: Clases concretas que extienden Shape y sobrescriben el método draw().


3. `ShapeCache`: Clase que mantiene un registro de objetos prototipo y permite clonar a través del método getShape().


4. `PrototypePatternDemo`: Clase principal donde se prueba el patrón Prototype clonando objetos de tipo Circle y Square.



Salida Esperada

```js
Forma : Círculo
Dibujando un Círculo
Forma : Cuadrado
Dibujando un Cuadrado
```

Este ejemplo demuestra cómo el patrón Prototype facilita la clonación de objetos complejos sin necesidad de reconstruirlos.

## RECURSION EN FUNCIONES (tarea)
En JavaScript, la recursión funciona de manera similar a otros lenguajes de programación. Una función recursiva es aquella que se llama a sí misma para resolver un problema, descomponiéndolo en subproblemas más pequeños hasta llegar a un caso base que termina la recursión.

### Conceptos Clave:
- **Recursión:** Una función se llama a sí misma para resolver un problema.
- **Caso Base:** Condición que detiene la recursión.
- **Llamada Recursiva:** La función se llama con parámetros modificados.

Ejemplo de Factorial en JavaScript:
```javascript
function factorial(n) {
    if (n === 1) return 1;  // Caso base
    return n * factorial(n - 1);  // Llamada recursiva
}
console.log(factorial(5));  // Salida: 120
```
Ejemplo de Fibonacci:
```javascript
Copiar código
function fibonacci(n) {
    if (n === 0) return 0;  // Caso base
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);  // Llamada recursiva
}
console.log(fibonacci(6));  // Salida: 8
```

Recursión de Cola:

Optimiza la recursión haciendo que la llamada recursiva sea la última operación.
```javascript
Copiar código
function fibonacciTailRecursive(n, a = 0, b = 1) {
    if (n === 0) return a;
    if (n === 1) return b;
    return fibonacciTailRecursive(n - 1, b, a + b);
}
console.log(fibonacciTailRecursive(6));  // Salida: 8
```
### Ventajas y Desventajas:
- **Ventajas:** Soluciones más elegantes y fáciles de leer para problemas recursivos (por ejemplo, árboles).
- **Desventajas:** Puede ser ineficiente o causar desbordamiento de pila si no se maneja correctamente.
#### Optimización:
Memorización o recursión de cola pueden mejorar el rendimiento y evitar desbordamiento de pila.


## FUNCIONES CALLBACKS (tareas)
En JavaScript, una función callback es una función que se pasa como argumento a otra función y que luego se invoca dentro de esa función. Las callbacks son una forma de manejar la asynchronous programming (programación asíncrona) o eventos, como cuando se trabajan con APIs o temporizadores.

### Características de una Callback:
- Se pasa como argumento a otra función.
- Se ejecuta más tarde, generalmente después de que una operación compleja se haya completado (como una operación asíncrona).
- Son una forma de manejar tareas asíncronas o de ordenar operaciones.

Ejemplo Básico:
```javascript
function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback();  // Ejecuta el callback
}

function despedir() {
    console.log("Adiós!");
}

saludar("Juan", despedir);
// Salida:
// Hola, Juan
// Adiós!
```
Ejemplo con Asincronía (setTimeout):
```javascript
console.log("Inicio");

setTimeout(function() {
    console.log("Esto aparece después de 2 segundos");
}, 2000);

console.log("Fin");
```
Salida:
```js
Inicio
Fin
Esto aparece después de 2 segundos
```
### Uso Común de Callbacks:
- Eventos: como clics en botones.
- Operaciones asíncronas: como leer archivos o hacer solicitudes HTTP.
### Problema: Callback Hell
Cuando las callbacks se anidan demasiado, el código se vuelve difícil de leer y mantener (callback hell). Se puede evitar con promesas o async/await.

**En resumen:** Las callbacks son funciones pasadas como argumentos a otras funciones, útiles principalmente para manejar tareas asíncronas.

# CLASES
Las clases en javascript llegan en la version `ECMAScript 6`, javascript no tenia al igual que otros lenguajes de programacion orientados a objetos las `clases` ya que js se enfocaba en la `programacion funcional`, sin embargo con la llegada es `Es6`, javascript adopta ser un lenguaje de programacion multiparadigma, entre ellos la programacion orientada a objetos con la llegada de las `clases`.
## ESTRUCTURA DE UNA CLASE EN JAVASCRIPT
Una clase esta separada en 3 grandes secciones.

1. el nombre de la clase debera ser en singular y en PascalCase
2. debera tener atributos (valores o variables), estos deberan ser sustantivos y estar escritos en camelCase
3. deberan tener metodos (acciones, funciones), estos deberan ser verbos o estar escritos en camelCase.

> [!NOTE]
> Una entidad: es cualquier cosa que puedes describir o que tiene atributos y acciones ejmplo carro.
```js
class Computadora{
    //atributos
    constructor(marca){
        this.marca=marca
        this.color=""
        this.tipoCase="tower"
    }
    //metodos
    encender(){return "estoy encendiendo"}
    apagar(){return "estoy cerrando sesion y guardando informacion antes del apagado"}
    escribir(){return "escribiendo mi informe"}
    jugar(){return "jugando dota"}
}
//instanciar
let miPc()=new Computador("gigabyte")
miPc.encender()
```
>[!NOTE]
>prototype=funcion
>clase=metodo 