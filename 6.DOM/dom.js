// let parrafoDos=document.getElementById("dos")
// let texto=prompt("ingresa tu nombre")
// console.log(parrafoDos.textContent="hola",texto) 

//<div id="miId" class="miClase" style="background:red; width:200px; height:200px"></div>
let newElement=document.createElement("div")   
newElement.id="miId" //agregar atributo id
newElement.className="miClase"  //agregar atributo de tipo class
// newElement.style="background:red; width:200px; height:200px"   // atributo style
// es mejor agregar miClase style en mi archiv css
let respuesta=prompt("escribe azul o rojo")
if (respuesta=="rojo"){
    newElement.className="cuadro_rojo"
}else{
    newElement.className="cuadro_azul"
}
let body=document.querySelector("body")   
body.appendChild(newElement)   //agregar un elemento nuevo como hijo             