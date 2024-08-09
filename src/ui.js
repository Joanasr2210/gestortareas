import { getTasks } from "./task";

//funcion para mostrar las tareas 

export const renderTasks = () => {

const taskList = document.getElementById("task-list");
 taskList.innerHTML = " ";
 const tasks = getTasks ();
 tasks.forEach((task) => {
  const li = document.createElement("li")
  li.setAttribute("data-id", task.id);


  // añadir clases solo si las tarea esta completada
    if(task.completed === true){
        li.classList.add("completed");
    }

    li.innerHTML = `
        ${ task.text }
        <button class="delete"> Eliminar </button>
        <button class="toggle"> ${ task.completed === true ? "Deshacer" : "Completar" } </button>
    `;
    taskList.appendChuld(li);
 });
};