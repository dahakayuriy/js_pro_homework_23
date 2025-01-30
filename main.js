"use strict";
document.getElementById("addTaskBtn").addEventListener("click", function () {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    let li = document.createElement("li");
    li.innerHTML = taskText + ' <button class="delete-btn">Delete</button>';
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
});

document.getElementById("taskList").addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});
