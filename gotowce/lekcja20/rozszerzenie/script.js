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

function doJump() {
  isJumping = true;
  character.classList.add("jump");
  setTimeout(function () {
    character.classList.remove("jump");
    isJumping = false;
  }, 400);
}

updateDisplay();

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" || e.key === "w") {
    posY = posY - step;
  } else if (e.key === "ArrowDown" || e.key === "s") {
    posY = posY + step;
  } else if (e.key === "ArrowLeft" || e.key === "a") {
    posX = posX - step;
  } else if (e.key === "ArrowRight" || e.key === "d") {
    posX = posX + step;
  }

  const area = document.getElementById("game-area");
  const maxX = area.clientWidth - 50;
  const maxY = area.clientHeight - 50;
  posX = Math.max(0, Math.min(posX, maxX));
  posY = Math.max(0, Math.min(posY, maxY));

  updateDisplay();

  if (e.key === " " && !isJumping) {
    doJump();
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

  if (cheatBuffer.includes("starburst")) {
    const area = document.getElementById("game-area");
    area.style.background = "linear-gradient(135deg, #0a0020, #1a0040, #000030)";
    statusDisplay.textContent = "STARBURST!";
    cheatBuffer = "";
  }

  if (cheatBuffer.includes("reset")) {
    character.className = "";
    character.textContent = "🧑‍🚀";
    character.style.fontSize = "40px";
    statusDisplay.textContent = "brak";
    cheatBuffer = "";
  }

  updateDisplay();
});
