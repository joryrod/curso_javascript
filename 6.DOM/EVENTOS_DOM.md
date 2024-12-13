- **sintaxis basica de addEventListener():
```js
//sintaxis
elemento.addEventListener('evento', function, opciones);
```
- **Evento de click ('click')**
```js
//sintaxis
elemento.addEventListener('click', function() {
    console.log('El elemento fue clickeado');
});
//ejemplo
const boton = document.querySelector('button');
boton.addEventListener('click', () => {
    alert('Botón clickeado');
});
```
- **Evento de mouse sobre un elemento ('mouseover')**
```js
//sintaxis
elemento.addEventListener('mouseover', function() {
    console.log('El mouse está sobre el elemento');
});
//ejemplo
const caja = document.querySelector('.caja');
caja.addEventListener('mouseover', () => {
    caja.style.backgroundColor = 'yellow';  // Cambia el color de fondo al pasar el mouse
});
```
- **Evento de teclado ('keydown', 'keyup', 'keypress')**
```js
//sintaxis
elemento.addEventListener('keydown', function(event) {
    console.log('Tecla presionada:', event.key);
});
//ejemplo
document.addEventListener('keydown', (event) => {
    console.log('Tecla presionada:', event.key);  // Muestra la tecla que se presionó
});
```
- **Evento de envío de formulario ('submit')**
```js
//sintaxis
formulario.addEventListener('submit', function(event) {
    event.preventDefault();  // Previene el envío por defecto
    console.log('Formulario enviado');
});
//ejemplo
const formulario = document.querySelector('form');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();  // Evita que el formulario se envíe
    alert('Formulario enviado');
});
```
- **Evento de cambio en el valor de un campo (change)**
```js
//sintaxis
elemento.addEventListener('change', function() {
    console.log('El valor del campo ha cambiado');
});
//ejemplo
const select = document.querySelector('select');
select.addEventListener('change', (event) => {
    console.log('Opción seleccionada:', event.target.value);
});
```
- **Evento de enfoque en un campo (focus)**
```js
//sintaxis
elemento.addEventListener('focus', function() {
    console.log('El campo ha recibido el enfoque');
});
//ejemplo
const input = document.querySelector('input');
input.addEventListener('focus', () => {
    console.log('El campo ha sido enfocado');
});
```
- **Evento de pérdida de enfoque en un campo (blur)**
```js
//sintaxis
elemento.addEventListener('blur', function() {
    console.log('El campo ha perdido el enfoque');
});
//ejemplo
const input = document.querySelector('input');
input.addEventListener('blur', () => {
    console.log('El campo ha perdido el enfoque');
});
```
- **Evento de cambio de tamaño de la ventana (resize)**
```js
//sintaxis
window.addEventListener('resize', function() {
    console.log('La ventana ha cambiado de tamaño');
});
//ejemplo
window.addEventListener('resize', () => {
    console.log('La ventana ha sido redimensionada');
});
```
- **Evento de arrastre del mouse (drag, dragstart, dragend)**
```js
//sintaxis
elemento.addEventListener('dragstart', function(event) {
    console.log('El arrastre ha comenzado');
});
elemento.addEventListener('drag', function(event) {
    console.log('El elemento está siendo arrastrado');
});
elemento.addEventListener('dragend', function(event) {
    console.log('El arrastre ha terminado');
});
//ejemplo
const elementoArrastrable = document.querySelector('.arrastrable');
elementoArrastrable.addEventListener('dragstart', () => {
    console.log('El arrastre ha comenzado');
});
elementoArrastrable.addEventListener('dragend', () => {
    console.log('El arrastre ha terminado');
});
```
- **Evento de hacer scroll en la página (scroll)**
```js
//sintaxis
elemento.addEventListener('scroll', function() {
    console.log('Se ha realizado un desplazamiento');
});
//ejemplo
window.addEventListener('scroll', () => {
    console.log('Se ha desplazado por la página');
});
```
- **Evento de carga de la página (load)**
```js
//sintaxis
window.addEventListener('load', function() {
    console.log('La página ha cargado completamente');
});
//ejemplo
window.addEventListener('load', () => {
    console.log('La página ha terminado de cargarse');
});
```
- **Evento de cancelación de la acción (cancel)**
```js
//sintaxis
elemento.addEventListener('cancel', function() {
    console.log('La operación ha sido cancelada');
});
//ejemplo
const form = document.querySelector('form');
form.addEventListener('cancel', () => {
    console.log('El formulario ha sido cancelado');
});
```
- **Evento de cambio de visibilidad de la página (visibilitychange)**
```js
//sintaxis
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('La página está oculta');
    } else {
        console.log('La página es visible');
    }
});
//ejemplo
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('La página está oculta');
    } else {
        console.log('La página es visible');
    }
});
```
- **Evento de finalización de animación (animationend)**
```js
//sintaxis
elemento.addEventListener('animationend', function() {
    console.log('La animación ha finalizado');
});
//ejemplo
const caja = document.querySelector('.caja');
caja.addEventListener('animationend', () => {
    console.log('La animación ha terminado');
});
```
- **Evento de finalización de transición (transitionend)**
```js
//sintaxis
elemento.addEventListener('transitionend', function() {
    console.log('La transición ha finalizado');
});
//ejemplo
const caja = document.querySelector('.caja');
caja.addEventListener('transitionend', () => {
    console.log('La transición ha terminado');
});
```
- **Evento de doble clic (dblclick)**
```js
//sintaxis
elemento.addEventListener('dblclick', function() {
    console.log('El elemento fue doblemente clickeado');
});
//ejemplo
const caja = document.querySelector('.caja');
caja.addEventListener('dblclick', () => {
    alert('¡Doble clic en el elemento!');
});
```