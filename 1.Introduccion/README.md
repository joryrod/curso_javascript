# Introduccion
- **Temario**
  - [comentarios](#comentarios) 
  - la consola
  - Naining
  
## Comentarios
Es la parte denttro de mi archivo de codigo que no es leido ni ejecutado por el interpetre de `js`.
> [!TIP]
> Los comentarios nos ayudan a entender nuestro codigo, y en ocasiones podemos usarlos para silenciar temporalmente partes del codigo *(comentar un codigo)*

### Tipos de Comentario
1. **Una sola linea**
   ```js
   //comentario de una sola linea
   ```
2. **Multiples lineas**
   ```js
   /*
   comentario de multi
   linea
   */
   ```
3. **JSDoc**
4. ```js
   /**
    * este es una linea
    * esta es otra linea
    */
   ```
   este tipo de comentario es muy usado para documentar el codigo, generalmente usado para la explicacion de funciones y clases en `js`.

   [link del archivo](comentarios.js)

## Consola
la herramienta de javascript mas usada , dentro de los navegadores es usada para la [depuracion](#depuracion) de nuestro codigo.

> [!TIP]
> ##### depuracion, es la tecnica que nos permite mostrar el codigoen las distintas fases del desarrollo, y verificar que el mensaje mostrado sea el correcto. y verificando que el codigo no tenga error de sintaxis de logica o de precaucion.

### tipos de mensajes por consola
#### 1. notificadores
mostrar un mensaje por consola 
```js
console.log("hola mundo")
```
Mostrar un mensaje de estilo informativo
```js
console.info("mensaje informativo")
```
Mostrar un mensaje de estilo o tipo alerta
```js
console.warn("mensaje de tipo alerta")
```
Mostrar un mensaje de estilo o tipo error
```js
console.error("mensaje de tipo error")
```
#### 2. gestion de tiempo
este tipo de mensaje no sirve para ver la duracion de ejecucion de nuestro codigo y poder optmizar para hacer uso de esta herramienta tenemos que iniciar la consola con un `time()` luego vendra el codigo que deseamos ver la duracion y finalmente terminar el time de la consola con `timeEnd()`.
```js
edad=18
if(edad>=18){
    console.log("eres mayor de edad")
}else{
    console.warn("eres pulpin")
}
```
#### 3. tablas 
este tipo de mensaje por consola nos muestra la informacion en una tabla.
solo formateara a los datos de tipo `array` y `obgetos`

```js
lenguajes=[
   {nombre:"javascript", extencion:".js"}
   {nombre:"python", extencion:".py"}
   {nombre:"php", extencion:".php"}
]
```