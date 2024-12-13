# INDICE
- [DOM](#dom--document-objet-model)
- [Selectores](#selectores---recorriendo-el-dom)
- [Manipulacion del DOM](#manipulacion-del-dom)
- [Propiedades de los elementos DOM](#propiedades-de-los-elementos-dom)
- [Acciones o Eventos con elementos en el DOM (averiguar)](#acciones-o-eventos-con-elementos-en-el-dom-averiguar)

# DOM -Document Objet Model
Modelo de documento de objeto
El `DOM` es un conjunto de utilidades especificamente diseñada para manipular documentos XML y HTML.
El DOM transforma el archivo HTML en un arbol de nodos jerarquicos, facilemente manipulables. El DOM convierte todo el contenido de HTMl en un objeto de javascript.
- **mi archivo index.html**
```html
<body>
    <h1 id="titulo">titulo</h1>
    <p class="parrafo"> esta es la descripcion de mi pagina </p>
    <ul>
        <li>primer elemento</li>
        <li>segundo elemento</li>
        <li>tercer elemento</li>
    </ul>
</body>
```
- **mi archivo script.js**
```js
document:{
    elemnt:body,
    attr:null,
    text:null,
    child:[
        {
            Elemnt:h1,
            attr:{id:"titulo"},
            text:"titulo",
            child:null
        },
        {
            Element:p,
            attr:{class:"parrafo"},
            text:"esta es la descripcion de mi pagina",
            child:null
        }
        {
            Element:ul,
            attr:null,
            text:null,
            child:[
                {
                    Element:li,
                    attr:null,
                    text:"primer elemento",
                    child:null
                },
                {
                    Element:li,
                    attr:null,
                    text:"segundo elemento",
                    child:null
                },
                {
                    Element:li,
                    attr:null,
                    text:"tercer elemento",
                    child:null
                }
            ]

        }
    ]
}
```
DOM a demas de ralizar el trabajo de convertir un archivo `HTML` en un objeto de javascript, nos ofrece una `API` ( Application Programming Interfaces-Interfaz de programacion de aplicaciones).
## Selectores - recorriendo el DOM
Los selectores nos permite obtener o capturar una o varias etiquetas HTML incluyendo sus atributos, contenido e hijos en caso de que los tuviera.
Los selectores que podemos utilizar son variables, podemos capturar etiqueta a través de sus atributos como de el nombre de la etiqueta misma.
Los selectores son `funciones` si hablamos de `poo` entonces podemos decir que son `metodos`. son los siguientes:
- **getElementById** - devuelve un elemento(etiqueta) que tenga un id especifico.
```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p> <!--no puede haber dos id uguales, el id es unico-->
```
```js
let parrafo=document.getElementById("dos")
```
- **getElementByClassName** - devuelve un elemento que tenga una clase especifica.
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo">parrafo uno<p>
<p id="parrafo_dos">parrafo dos</p>
```
```js
let parrafo=documento.getElementByClassName("parrafo")
```
- **querySelector** - devuelve el primer elemento que coincida con el selector ingresado, puede ser un id, class, name o tag(etiqueta).
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo">parrafo uno<p>
<p id="parrafo_dos">parrafo dos</p>
<h2>subtitulo</h2>
```
```js
let titulo=document.querySelector("#titulo") // si es id se usa #
let primerParrafo=document.querySelector(".parrafo") //si es clase solo va un punto
let segundoParrafo=document.querySelector("#parrafo_dos")
let subTitulo=document.querySelector("h2") // si solo quiero capturar la etiqueta, solo pongo el nombre, en caso de que no tenga id ni class
```
**Averiguar que otros selectores o metodos para recorrer el DOM tiene javascript**
## Manipulacion del DOM
- **createElement** - este metodo crea un elemento HTML con el nombre que le pasemos por parametro.
```js
let titulo=document.createElement("h1")
```
- **appendChild** - nos permite hacer hijo un elemento dentro de otro.
```js
let titulo=document.createElement("h1")
let body=querySelector("body")
body.appendChild(titulo)
```
## Propiedades de los elementos DOM
- **clasName** - nos permite setear o capturar el nombre de la clase que tenga un elemento.
- **id** - lo mismo que className pero con el atributo id.
- **inerHTML** - devuelve o permite insertar codigo `HTML `(incluyendo tag y texto).
- **inerText** - devuelve o permite insertar texto en un elememnto.
- **textcontent** - nos permite agregar o modificar el codigo de un elemento.
- **value** - nos permite obtener o setear valores de un elemento `input`.

## Acciones o Eventos con elementos en el DOM (averiguar)
addEventListener("clic",()=>{
})

> [!NOTE]
> Tecnologias para el procesamiento de texto a través del marcado o `markup` (etiquetas- que nos permite a través de palabras reservadas darle un estilo o significado al contenido de las etiquetas). La primera tecnologia se fue `xml` despues nace `html`.**dato** toda la suite de microsoft office utiliza xml. Despues la ultima generacion de tecnologias de marcado de texto `markdown`.

