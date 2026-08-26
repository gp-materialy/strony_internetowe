"use strict";

const character = document.getElementById("character");
const posXDisplay = document.getElementById("pos-x");
const posYDisplay = document.getElementById("pos-y");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const statusDisplay = document.getElementById("status");
const enemy = document.getElementById("enemy");
const collectibles = document.querySelectorAll(".collectible");
const gameOverScreen = document.getElementById("game-over");

let posX = 200;
let posY = 200;
let isJumping = false;
let score = 0;
let lives = 3;
let gameOver = false;
let enemyX = 500;
let enemyY = 100;
let enemySpeedX = 2;
let enemySpeedY = 2;
const step = 20;

function updateDisplay() {
  character.style.left = posX + "px";
  character.style.top = posY + "px";
  posXDisplay.textContent = posX;
  posYDisplay.textContent = posY;
  scoreDisplay.textContent = score;
  livesDisplay.textContent = "❤️".repeat(lives);
}

updateDisplay();

// TODO: napisz funkcję checkCollision(a, b) porównującą prostokąty dwóch elementów
// TODO: napisz funkcję collectItem() sprawdzającą kolizje z każdą znajdźką
// TODO: napisz funkcję moveEnemy() przesuwającą przeciwnika i odbijającą od ścian
// TODO: napisz funkcję checkEnemyHit() reagującą na kolizję z przeciwnikiem

document.addEventListener("keydown", function (e) {
  if (gameOver) return;

  if (e.key === "ArrowUp") {
    posY = posY - step;
  } else if (e.key === "ArrowDown") {
    posY = posY + step;
  } else if (e.key === "ArrowLeft") {
    posX = posX - step;
  } else if (e.key === "ArrowRight") {
    posX = posX + step;
  }

  const area = document.getElementById("game-area");
  const maxX = area.clientWidth - 50;
  const maxY = area.clientHeight - 50;
  posX = Math.max(0, Math.min(posX, maxX));
  posY = Math.max(0, Math.min(posY, maxY));

  updateDisplay();

  if (e.key === " " && !isJumping) {
    isJumping = true;
    character.classList.add("jump");
    setTimeout(function () {
      character.classList.remove("jump");
      isJumping = false;
    }, 400);
  }
});

// TODO: uruchom pętlę gry za pomocą setInterval
