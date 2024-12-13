let input = document.querySelector("#tarea");
let button = document.querySelector("#btn-agregar");
let ul = document.querySelector("#lista-tareas");

button.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML = `${input.value} <button class="delete">Eliminar</button>`;
    
    input.value = "";
    
    let deleteButton = li.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        ul.removeChild(li);
    });
    
    ul.appendChild(li); 
});
