# VALORES, TIPOS Y OPERADORES
## Indice
- [VALORES, TIPOS Y OPERADORES](#valores-tipos-y-operadores)
  - [Indice](#indice)
  - [Valores](#valores)
    - [Datos Primitivos](#datos-primitivos)
      - [Numeros(Number)](#numerosnumber)
      - [Arimetica](#arimetica)
      - [cadenas](#cadenas)
      - [concatenacion](#concatenacion)
## Valores
Imagina un mar de bits
Una computadora moderna tiene mas de 100 mil millones de bits almacenados en su `memoria de trabajo` o `memoria principal` o `memoria volatil` o `ram`.
Ahora la memoria no volatil o memoria secundaria o memoria de almacenamiento tiene estos bits de manera ordenada generalmente apilada como si de un estante de una biblioteca se tratara.
cuando nosotros programamos en la `memoria de trabajo`, para trabajar de manera ordenada con los bits que se encuentran en nuestro mar de bits. , javascript ordena los bits en pequeños partes o piezas de informacion a esto se le conoce como `VALORES`. 
Cada valor tiene una funcionalidad distinta puede ser numero texto o una funcion.

cuando hablamos de tipos de datos en javascript nos referimos a su representacion binaria y al tipo de valor que usamos

### Datos primitivos
Son aquellos datos que ya ecisten no pueden ser creados, actualizados y eliminados solo pueden ser llamados para el uso que deseamos darles.
los datos primitivos en js son:
#### - Numeros(Number)
Los valores de tipo numero, como es de esperar son numeros y en js se escribe o se hace el llamado de este valor de la sgt. manera:
- numero de tipo entero 
```js
20
// estamos usando un patron de bits para el numero 20 que existiria dentro de la memoria de trabajo 
```
- numero de punto flotante, decimal o fraccion
```js
2.7 
0.
.0
```
> [!TIP]
> cuando javascript hace trabajo de memoria (cuando crea un patron de bit para almacenar) todos los numeros son almacenados como decimal positivo.
- numero notacion cientifica
```js
2.338e8
// 2.998 * 10^8
```
>[!WARNING]
>cuando js realiza operaciones con numeros enteros el resul,tado siempre sera exacto, cuando realice operaciones con numeros decimales el resultado perdera precision pór que solo tiene 64 bit para almacenar el numero esto suele ocurrir a cuyos decimales sean infinitos como el caso el numero PI ##es nuestra responsabilidad como programadoreshacer el uso de los decimales con aproximadamente para evitar errores##.

> [!TIP]
> cuando javascript hace trabajo de memoria (cuando crea un patron de bit para almacenar) todos los numeros son almacenados como decimal positivo.
```js
// dato numerico de tipo entero
// entero positivo 
23
// entero negotivo
-23
// decimal positivo
.0
// decoimal negativo
-3,6
```
#### numeros especiales
en js ewxisten tres valores de tipo numero que se consideran un dato primitivo numerico de tip0o especial.

``` js
Infinity
- Infinity
NaN // not a number
// no es un numero
// cuando el resultado de una operacion es matematicamente imposible.
```
>cuando javascript hace trabajo de memoria(cuando crea un patron de bit para alamcenar) todos numero se almacena como decimal positivo.
- numeros especiales 
En javascript existen tres valores de tipo numero que se consideran un dato primitivo numerico de tipo especial
```js
infinity
- infinity // negativo
NaN // not a number
// cuando el resultado de una operacion es matematicamente imposible.
```
#### Arimetica
La principal operacion que se puede hacer con numeros es la arimetica.
Para esto tenemos los operadores arimeticos como:
- suma(+).
- resta(-).
- multiplicacion(*).
- division(/).
- potencia(**).
- modulo(%).
**podemos agrupar operaciones con parentesis () las operaciones que esten dentro del parentesis se ejecutaran primero**
consulta el archivo de operadores [aqui](./operadores.js). ve los ejercicios [aqui](./ejercicios.js)
#### Cadenas
El siguiente tipo de dato primitivo es la `cadena` - `string`.
¿para que se usan las cadenas en javascript?
- para representar texto 
una cadena se escribe encerrando su contenido entre comillas:
```js
// cadenas con contenido
"soy un texto" // comillaws dobles
'tambien soy un texto' // comillas simples
`yo tambien soy` // acento grave es una incorporacion de emnascript 6 

//cadena vacia
""
```
**Problema** - como representamos un texto entre comillas 
para hacer el uso de comillas dentro del contenido de una cadena podemos seguir las siguientes recomendaciones:
```js
// si nuestro texto tiene que estar entre comillas simples
"'este texto se muestra entre comillas simples'"
// si nuestro texto tiene que estar entre comillas dobles
'"este texto se muestra entre comillas dobles"'
// si nuestro texto tendra tanto comillas dobles como simples
`'esta en comillas simples',"esta en comillas dobles"`
```
otra manera de hacer lo antes mensionado es haciendo uso de la barra ivertida `\` tambien conocida como `caracter de escape`.

hacer uso de este caracter indica que el caracter posterior tendra un significado especial.
```js
"de este texto solo esta \"palabra\" estara en comillas"
```
**problema** - deseamos agregar un salto de linea en nuestro texto.
```js
// solucionamos este problema haciendo uso de los acentos graves
'primera linea 
segunda linea'
```
antes de la incorparacion de enmascript 6 en el uso de acentos graves (`) se utilizaba el caracter de escape `\`
```js
"esta es mi primera linea \n y esta es la segunda linea 
```
**problema** - deseo tabular un texto
```js
`
este texto no esta tabulado
    este texto si esta tabulado
`
```
ahora tabularemos haciendo uso del caracter de escape
```js
"sin tabular \t y tabulado"
```
### concatenacion