"use strict";

const character = document.getElementById("character");
const posXDisplay = document.getElementById("pos-x");
const posYDisplay = document.getElementById("pos-y");
const statusDisplay = document.getElementById("status");
const cheatDisplay = document.getElementById("cheat-display");

let posX = 200;
let posY = 200;
let isJumping = false;
let cheatBuffer = "";
const step = 20;

function updateDisplay() {
  character.style.left = posX + "px";
  character.style.top = posY + "px";
  posXDisplay.textContent = posX;
  posYDisplay.textContent = posY;
  cheatDisplay.textContent = cheatBuffer || "_";
}

updateDisplay();

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    posY = posY - step;
  } else if (e.key === "ArrowDown") {
    posY = posY + step;
  } else if (e.key === "ArrowLeft") {
    posX = posX - step;
  } else if (e.key === "ArrowRight") {
    posX = posX + step;
  }
  updateDisplay();

  if (e.key === " " && !isJumping) {
    isJumping = true;
    character.classList.add("jump");
    setTimeout(function () {
      character.classList.remove("jump");
      isJumping = false;
    }, 400);
  }

  if (e.key === "1") {
    character.className = "power-speed";
    statusDisplay.textContent = "szybkość";
  } else if (e.key === "2") {
    character.className = "power-shield";
    statusDisplay.textContent = "tarcza";
  } else if (e.key === "3") {
    character.className = "power-fire";
    statusDisplay.textContent = "ogień";
  } else if (e.key === "0") {
    character.className = "";
    statusDisplay.textContent = "brak";
  }

  cheatBuffer = cheatBuffer + e.key.toLowerCase();
  cheatBuffer = cheatBuffer.slice(-20);

  if (cheatBuffer.includes("motherlode")) {
    statusDisplay.textContent = "MOTHERLODE!";
    character.style.fontSize = "80px";
    cheatBuffer = "";
  }

  if (cheatBuffer.includes("aezakmi")) {
    statusDisplay.textContent = "AEZAKMI!";
    character.textContent = "👻";
    cheatBuffer = "";
  }

  updateDisplay();
});
