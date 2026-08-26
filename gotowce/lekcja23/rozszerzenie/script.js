"use strict";

let tasks = loadTasks();
let currentFilter = "all";

function loadTasks() {
  let saved = localStorage.getItem("tasks");
  if (saved) {
    return JSON.parse(saved);
  }
  return [];
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

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
    if (currentFilter === "active" && task.done) continue;
    if (currentFilter === "done" && !task.done) continue;

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
      saveTasks();
      renderTasks();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Usuń";
    deleteBtn.addEventListener("click", function () {
      tasks.splice(i, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(titleSpan);
    li.appendChild(dateSpan);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }
  updateCounter();
}

function updateCounter() {
  let active = tasks.filter(function (t) {
    return !t.done;
  });
  let counter = document.getElementById("counter");
  counter.textContent = "Pozostało zadań: " + active.length;
}

function addTask() {
  let input = document.getElementById("task-title");
  let title = input.value.trim();
  if (title !== "") {
    let task = createTask(title);
    tasks.push(task);
    input.value = "";
    saveTasks();
    renderTasks();
  }
}

let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addTask);

let filterBtns = document.querySelectorAll(".filter-btn");
for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function () {
    currentFilter = this.getAttribute("data-filter");
    for (let j = 0; j < filterBtns.length; j++) {
      filterBtns[j].classList.remove("active");
    }
    this.classList.add("active");
    renderTasks();
  });
}

renderTasks();
