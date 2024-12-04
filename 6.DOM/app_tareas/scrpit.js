let input=document.querySelector("#tarea")
let button=document.querySelector("#btn-agregar")
let ul=document.querySelector("#lista-tarea")

button.addEventListener("clik",()=>{
    let li=document.createElementNS("li")
    li.textContent=input.value
    ul.appendChild(li)
    input.value=""
})