- **document.querySelectorAll()** - Devuelve todos los elementos que coinciden con el selector CSS proporcionado como un `NodeList`.
```js
//sintaxis
let elements = document.querySelectorAll(selector);
//ejemplo
let divs = document.querySelectorAll('div.className');
```

- **document.getElementsByTagName()** - Devuelve todos los elementos de un tipo específico (por ejemplo, `div`, `p`, `a`).
```js
//sintaxis
let elements = document.getElementsByTagName(tagName);
//ejemplo
let divs = document.getElementsByTagName('div');
```

- **parentNode: Devuelve el nodo padre del elemento.**
```js
//sintaxis
const padre = elemento.parentNode;
//ejemplo
const parrafo = document.querySelector('p');
const padre = parrafo.parentNode;
```

- **elemento.children**
```js
//sintaxis
const hijosElementos = elemento.children;
//ejemplo
const lista = document.querySelector('ul');
const items = lista.children;
```

- **elemento.firstChild**
```js
//sintaxis
const primerHijo = elemento.firstChild;
//ejemplo
const div = document.querySelector('div');
const primerHijo = div.firstChild;
```
- **elemento.firstElementChild**
```js
//sintaxis
const primerHijoElemento = elemento.firstElementChild;
//ejemplo
const lista = document.querySelector('ul');
const primerHijo = lista.firstElementChild;
```
- **elemento.lastChild**
```js
//sintaxis
const ultimoHijo = elemento.lastChild;
//ejemplo
const div = document.querySelector('div');
const ultimoHijo = div.lastChild;
```
- **elemento.lastElementChild**
```js
//sintaxis
const ultimoHijoElemento = elemento.lastElementChild;
//ejemplo
const lista = document.querySelector('ul');
const ultimoHijo = lista.lastElementChild;
```
- **elemento.nextSibling**
```js
//sintaxis
const siguienteHermano = elemento.nextSibling;
//ejemplo
const parrafo = document.querySelector('p');
const siguiente = parrafo.nextSibling;
```
- **elemento.previousSibling**
```js
//sintaxis
const hermanoAnterior = elemento.previousSibling;
//ejemplo
const parrafo = document.querySelector('p');
const anterior = parrafo.previousSibling;
```
- elemento.insertBefore(newNode, referenceNode)
```js
//sintaxis
elemento.insertBefore(nuevoNodo, nodoReferencia);
//ejemplo
const nuevoElemento = document.createElement('p');
nuevoElemento.textContent = 'Este es un nuevo párrafo';
const referencia = document.querySelector('p');
```
- elemento.appendChild(newNode)
```js
//sintaxis
elemento.appendChild(nuevoNodo);
//ejemplo
const nuevoElemento = document.createElement('div');
nuevoElemento.textContent = 'Elemento añadido al final';
const contenedor = document.querySelector('#contenedor');
```
- elemento.removeChild(node)
```js
//sintaxis
elemento.removeChild(nodo);
//ejemplo
const parrafo = document.querySelector('p');
parrafo.parentNode.removeChild(parrafo);  // Elimina el párrafo seleccionado
```
- elemento.setAttribute(attribute, value)
```js
//sintaxis
elemento.setAttribute('nombreAtributo', 'valor');
//ejemplo
const enlace = document.querySelector('a');
enlace.setAttribute('href', 'https://www.ejemplo.com');  // Establece un nuevo enlace
```
- elemento.getAttribute(attribute)
```js
//sintaxis
const valor = elemento.getAttribute('nombreAtributo');
//ejemplo
const enlace = document.querySelector('a');
const href = enlace.getAttribute('href');
```
- document.createElement(tagName)
```js
//sintaxis
const nuevoElemento = document.createElement('tagName');
//ejemplo
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Soy un nuevo div creado';
```
- document.createTextNode(text)
```js
//sintaxis
const nuevoTexto = document.createTextNode('Texto a añadir');
//ejemplo
const nuevoParrafo = document.createElement('p');
const texto = document.createTextNode('Este es un párrafo creado');
nuevoParrafo.appendChild(texto);
document.body.appendChild(nuevoParrafo); 
```