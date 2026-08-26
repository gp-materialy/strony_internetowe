"use strict";

let tasks = [];

function createTask(title) {
  return {
    title: title,
    done: false,
    createdAt: new Date().toLocaleDateString("pl-PL")
  };
}

function renderTasks() {
  let list = document.getElementById("task-list");
  list.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    let li = document.createElement("li");
    if (task.done) {
      li.classList.add("done");
    }

    let titleSpan = document.createElement("span");
    titleSpan.classList.add("task-title");
    titleSpan.textContent = task.title;

    let dateSpan = document.createElement("span");
    dateSpan.classList.add("task-date");
    dateSpan.textContent = task.createdAt;

    let doneBtn = document.createElement("button");
    doneBtn.classList.add("done-btn");
    doneBtn.textContent = task.done ? "Cofnij" : "Gotowe";
    doneBtn.addEventListener("click", function () {
      tasks[i].done = !tasks[i].done;
      renderTasks();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Usuń";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(i, 1);
      renderTasks();
    });

    li.appendChild(titleSpan);
    li.appendChild(dateSpan);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
}

function addTask() {
  let input = document.getElementById("task-title");
  let title = input.value.trim();
  if (title !== "") {
    let task = createTask(title);
    tasks.push(task);
    input.value = "";
    renderTasks();
  }
}

let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addTask);
