"use strict";

let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let description = document.getElementById("description");
let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function () {
  let isHero = document.body.classList.contains("hero");

  if (isHero) {
    document.body.classList.replace("hero", "villain");
    name.textContent = "Shadow Villain";
    description.textContent = "Tryb: Villain";
    avatar.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=Shadow";
  } else {
    document.body.classList.replace("villain", "hero");
    name.textContent = "Felix Hero";
    description.textContent = "Tryb: Hero";
    avatar.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix";
  }
});
