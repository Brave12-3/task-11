// Get elements by ID
const greetBtn = document.getElementById("greetBtn");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const msg = document.getElementById("msg");

// Greeting Button
greetBtn.addEventListener("click", function() {
  const name = prompt("Enter your name:");
  if (name) {
    msg.textContent = "Aselamualykum " + name + "! Welcome to your To-Do List 😊";
    console.log("Welcome " + name);
  } else {
    msg.textContent = "Please enter your name to continue!";
  }
});

//Task Button
addTaskBtn.addEventListener("click", function() {
  const taskName = taskInput.value.trim();

  if (taskName === "") {
    msg.textContent = "⚠️ Please type a task before adding!";
    return;
  }

  const newTask = document.createElement("li");
  newTask.textContent = taskName + " (Not completed)";
  newTask.style.color = "red";

 
  newTask.addEventListener("click", function() {
    if (newTask.style.color === "red") {
     
      newTask.textContent = taskName + " (Completed)";
      newTask.style.color = "green";
      msg.textContent = "✅ You have completed: " + taskName + ". Click again to remove.";
    } else {
      // Remove task
      taskList.removeChild(newTask);
      msg.textContent = "Task removed: " + taskName;
    }
  });

  //task to list
  taskList.appendChild(newTask);

  msg.textContent = "📝 Task added successfully: " + taskName;

  taskInput.value = "";
});
