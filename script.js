const taskInput = document.querySelector(".task-input input ");

let todos= JSON.parse(localStorage.getItem("todo-list"))

function showTodo(){
    todos.forEach((todo,id) =>{
        console.log(id.todo)
    })
}

showTodo();
taskInput.addEventListener("keyup", e=>{
    let userTask = taskInput.value.trim();
    if (e.key=="Enter" && userTask){
        //get localstorage todo-list
     
       if(!todos) { //if todo list isn't exist pass an empty array to todos
           todos=[]
       }

       taskInput.value=""
       let taskInfo = {name:userTask,status:"pending"};
       todos.push(taskInfo);
       localStorage.setItem("todo-list",JSON.stringify(todos))
       showTodo
    }
});