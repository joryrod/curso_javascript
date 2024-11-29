# INDICE
- [DOM](#dom--document-objet-model)
- 
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
## Selectores
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
## 
> [!NOTE]
> Tecnologias para el procesamiento de texto a través del marcado o `markup` (etiquetas- que nos permite a través de palabras reservadas darle un estilo o significado al contenido de las etiquetas). La primera tecnologia se fue `xml` despues nace `html`.**dato** toda la suite de microsoft office utiliza xml. Despues la ultima generacion de tecnologias de marcado de texto `markdown`.