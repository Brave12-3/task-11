const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const msg = document.getElementById("msg");
const taskCount = document.getElementById("taskCount");
const greetBtn = document.getElementById("greetBtn");

function updateTaskCount() {
  taskCount.textContent = taskList.children.length;
}

greetBtn.addEventListener("click", function() {
  const name = prompt("Enter your name:");
  if (name) {
    msg.textContent = "Aselamualykum " + name + "! Welcome to your To-Do List";
  } else {
    msg.textContent = "Please enter your name to continue!";
  }
});

addTaskBtn.addEventListener("click", function() {
  const taskName = taskInput.value.trim();
  
  if (taskName === "") {
    msg.textContent = "Please type a task before adding!";
    return;
  }

  const newTask = document.createElement("li");
  newTask.textContent = taskName;
  
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.backgroundColor = "red";
  deleteBtn.style.color = "white";
  deleteBtn.style.border = "none";
  deleteBtn.style.borderRadius = "5px";
  deleteBtn.style.cursor = "pointer";

  deleteBtn.addEventListener("click", function() {
    taskList.removeChild(newTask);
    msg.textContent = "Task deleted: " + taskName;
    updateTaskCount();
  });

  newTask.appendChild(deleteBtn);
  taskList.appendChild(newTask);
  msg.textContent = "Task added: " + taskName;
  taskInput.value = "";
  updateTaskCount();
});
