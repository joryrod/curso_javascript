/**let parrafoDos=document.getElementById("dos")
console.log(parrafoDos.textContent="hola")*/

/**let parrafoDos=document.getElementById("dos")
let texto=prompt("ingresa un texto")
parrafoDos.textContent=texto*/
//<div id="miId class="miClase" style="background:red; width:200px;height:200px"></div>
let newElem=document.createElement("div")
newElem.id="miId"
newElem.className=""
let respuesta=prompt("escribe el color azul o rojo para ver el cuadro")
if (respuesta=="rojo"){
    newElem.className="cuadro_rojo"
}else{
    newElem.className ="cuadro:azul"
}
//newElem.style="background:red;width:200px; height:200px"
let boby=document.querySelector("boby")
boby.appendChild(newElem)