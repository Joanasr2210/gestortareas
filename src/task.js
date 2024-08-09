
let tasks = JSON.parse(localStorage.getItem(tasks))|| [];
// agregar una tarea
export const addTask = (Task) =>{
 const newTask = {
   id: Date.now(),
   text: tasks,
   completed: false,
 };
 tasks.push(newTask);
 localStorage.setItem("tasks", JSON.stringify(tasks));
};

// eliminar una tarea
export const deleteTask = (id) => {
   tasks = tasks.filter((task) => task.id !== parseInt(id));
   localStorage.setItem("tasks", JSON.stringify(tasks));
};

// actualizar la tarea
export const toggleTask = (id) => {
    tasks = tasks.map =((task) => {
         if(task.id === parseInt(id)) {
            task.completed = !task.completed;
         }
         return task;
   });
 localStorage.setItem("tasks",JSON.stringify(tasks));
};

export const getTasks = () => tasks;
