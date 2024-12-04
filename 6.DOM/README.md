# INDICE
- [DOM-Document Object Modal](#dom-document-object-modal)
- [SELECTORES - recorriendo el dom](#selectores---recorriendo-el-dom)
- [Manipulacion del DOM](#manipulacion-del-dom)
- [Propiedades de los elementos  DOM](#propiedades-de-los-elementos--dom)
# DOM-Document Object Modal
Modelo de Documento de Objeto
el DOM es un conjunto de utilidades especificamente diseñadas para manipular documentosXML YHTML.
El DOM transforma el archivo HTML en un arbol de nodos jerarquico, facilmente manipulado.
El DOM convierte todo el contenido del archivo HMTL en un objeto de javascript.
- **mi archivo index.html**
```html
<body>
    <h1 id="titulo">titulo<h1>
    <p class="parrafo">este es la descripcion de mi pagina</p>
    <ul>
        <li>primer elemento</li>
        <li>segundo elemento</li>
        <li>tercer elemento</li>
    </ul>
</body>

```
- **mi archivo script.js**
```javascript
document:{
    Element:body,
    Attr:null,
    Child:[
        {
            Element:h1,
            Attr:{id:"titulo"},
            text:"titulo",
            Child:null
        },
        {
            Element:p,
            Attr:{class:"parrafo"},
            text:"este es el descripcion de mi pagina",
            Child:null
        },
        {
            Element:ul,
            Attr:null,
            text:null,
            Child:[
                {
                   Element:li,
                   Attr:null,
                   text:"primer elemento",
                   Child:null 
                },
                {
                    Element:li,
                    Attr:null,
                    text:"segundo elemento",
                    Child:null 
                },
                {
                    Element:li,
                    Attr:null,
                    text:"tercero elemento",
                    Child:null 
                }
            ]
        }
    ]
}
```
DOM ademas de realizar el trabajo de convertir un archivo `HTML` en un objeto de javscript, nos ofrece un `API`(Aplication Programming Interface- interfaz de programacion de aplicacion).


## SELECTORES - recorriendo el dom
Los selectores nos permite obtener o capturar una o varias `html` incluyendo sus atributos, contenido e hijos si los tuviera.
los selectores que podemos utlizar son variados podemos capturar etiqueta a travez de sus atributos como de el nombre de la etiqueta misma.
los selectores son `funciones` si hablamos de poo entonces se puede decir que son `metodos`, son los siguientes:
- **getElementById** - devuelve un elemento(etiqueta)que tenga un id especifico:
```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>
```
```js
let parrafo=document.getElementById("dos")
```
- **getElementByClassName** - devuelve un elemento que tenga una clase especifica.
```html
<h1 id="titulo"> titulo</h1>
<p class="parrafo">parrafo uno</p>
<p class="parrafo_dos">parrafo dos</p>
```
```js
let parrafo=document.getElementByClassName("parrafo")
// 
```
- **querySelector** - devuelve el primer elemento que conocida conel selector ingreado puede ser un id,class,name o tag.
```html
<h1 id="titulo"> titulo</h1>
<p class="parrafo">parrafo uno</p>
<p id="parrafo_dos">parrafo dos</p>
<h2>subtitulo</h2>
```
```js
let titulo=document.querySelector("#titulo")
let primerParrafo=document.querySelector(".parrafo")
let segundoParrafo=document.querySelector("#parrafo_dos")
let subTitulo=document.querySelector("h2")

```
# **averiguar que otros selectores o metodos para recorrer el DOM tiene javascript** :pencil:
- **getElementsByTagName** - Este método te permite obtener una colección de elementos con una etiqueta específica.
```js
let todoLosParrafos = document.getElementsByTagName("p");
```
- **querySelectorAll** - Este método te permite seleccionar todos los elementos que coincidan con un selector CSS.
```js
let elementosConClases = document.querySelectorAll(".my-class");
```
- **textContent** - Cambia el contenido de texto de un elemento.
```js
const paragraph = document.querySelector("p");
paragraph.textContent = "Nuevo texto del párrafo";
```
- **innerHTML** - Cambia el contenido HTML de un elemento.
```js
const container = document.getElementById("my-container");
container.innerHTML = "<p>Nuevo párrafo</p><div>Nuevo div</div>"; // Reemplaza el contenido del contenedor
```

- **setAttribute** -  Añade o cambia un atributo de un elemento.
```js
const image = document.getElementById("my-image");
image.setAttribute("src", "new-image.jpg"); // Cambia la fuente de la imagen
```

## Manipulacion del DOM
- **createElement** - este metodo crea un elemento HMTL con el nombre que le pasemos por parametro.
```js
let titulo=document.createElement("h1")
```
- **appendChild** - nos permite hacer hijo un elemento dentro del otro.
```js
let titulo=document.createElement("h1")
let boby=querySelector("boby")
boby.appendChild(titulo)
``` 
- **insertBefore** -  Inserta un nuevo nodo antes de un nodo de referencia existente.
```js
const container = document.getElementById("my-container");
const existingParagraph = container.querySelector("p");
const newParagraph = document.createElement("p");
newParagraph.textContent = "Párrafo insertado";
container.insertBefore(newParagraph, existingParagraph); // Inserta el nuevo párrafo antes del párrafo existente
```
- **removeChild** - Elimina un nodo hijo de un nodo padre.
```js
const container = document.getElementById("my-container");
const paragraph = container.querySelector("p");
container.removeChild(paragraph); // Elimina el párrafo del contenedor
```
- **classList.add** - Añade una clase al elemento.
```js
const element = document.getElementById("my-element");
element.classList.add("highlight"); // Añade la clase "highlight" al elemento
```

- **classList.remove** - Elimina una clase del elemento. 
```js
let element = document.getElementById("my-element");
element.classList.remove("highlight"); // Elimina la clase "highlight" del elemento
```
- **classList.toggle** - Añade la clase si no está presente, o la elimina si está presente.
```js
let element = document.getElementById("my-element");
element.classList.toggle("active"); // Alterna la clase "active" en el elemento
```
## Propiedades de los elementos  DOM
- **className** - permite setear o capturarel nombre de la clase que tenga un elemento.
- **id** - los mismo que classname pero con el atributo id.
- **innerText** - nos permite insertar texto en un elemento.
- **textContent** - nos permite agregar o modificar el contenido de un elemento.
- **value** - nos permite obtener o setear valores de un elemento `input`. 

## Acciones o eventos con elementos en el DOM (averiguar) :memo:

- **addEventListener** -Añade un evento a un elemento.
```js
document.getElementById("miBoton").addEventListener("click", function() {
    alert("Botón clicado!");
});
```
- **removeEventListener** - Remueve un evento de un elemento.
```js 
function miFuncion() {
    alert("Evento disparado");
}

let elemento = document.getElementById("miBoton");
elemento.addEventListener("click", miFuncion);

// Remover el event listener
elemento.removeEventListener("click", miFuncion);
```
- **dispatchEvent** - Despacha un evento en el elemento, lo cual activa los event listeners asociados.
```js 
let evento = new Event("miEvento");
document.getElementById("miElemento").dispatchEvent(evento);
```
- **CustomEvent** - Crea un evento personalizado que puede tener datos adicionales.
```js 
let eventoPersonalizado = new CustomEvent("miEventoPersonalizado", {
    detail: { mensaje: "Hola, mundo!" }
});

document.getElementById("miElemento").addEventListener("miEventoPersonalizado", function(event) {
    console.log(event.detail.mensaje);
});

// Despachar el evento personalizado
document.getElementById("miElemento").dispatchEvent(eventoPersonalizado);
```
- **event.target** - Devuelve el elemento que disparó el evento.
```js 
document.getElementById("miBoton").addEventListener("click", function(event) {
    console.log(event.target); // El elemento que disparó el evento
});
```
- **event.type** - Devuelve el tipo de evento.
```js 
document.getElementById("miBoton").addEventListener("click", function(event) {
    console.log(event.type); // "click"
});

```
- **event.preventDefault** - Evita la acción predeterminada del evento.
```js 
document.getElementById("miEnlace").addEventListener("click", function(event) {
    event.preventDefault(); // Previene que el enlace navegue
    console.log("Navegación prevenida");
});

```
- **event.stopPropagation** - Previene que el evento se propague a otros event listeners.
```js 
document.getElementById("miElemento").addEventListener("click", function(event) {
    event.stopPropagation(); // Previene la propagación del evento
    console.log("Propagación prevenida");
});

```

> [!NOTE] 
> Tecnologias para el procesamiento de texto a travez de marca `markup`(etiquetas que nos permite a travez de palabras reservadas darle un estilo o significado al contenido de las etiquetas). La primera tecnologia fue `xml` despues nace `html` despues la ultima generacion de tecnologia de markado de texto `markdown`.
