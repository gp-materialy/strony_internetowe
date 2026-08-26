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

function checkCollision(a, b) {
  const rectA = a.getBoundingClientRect();
  const rectB = b.getBoundingClientRect();
  return (
    rectA.left < rectB.right &&
    rectA.right > rectB.left &&
    rectA.top < rectB.bottom &&
    rectA.bottom > rectB.top
  );
}

function collectItem() {
  collectibles.forEach(function (item) {
    if (item.style.display === "none") return;
    if (checkCollision(character, item)) {
      item.style.display = "none";
      score = score + 1;
      updateDisplay();
    }
  });
}

function moveEnemy() {
  enemyX = enemyX + enemySpeedX;
  enemyY = enemyY + enemySpeedY;
  const area = document.getElementById("game-area");
  if (enemyX <= 0 || enemyX >= area.clientWidth - 40) {
    enemySpeedX = enemySpeedX * -1;
  }
  if (enemyY <= 0 || enemyY >= area.clientHeight - 40) {
    enemySpeedY = enemySpeedY * -1;
  }
  enemy.style.left = enemyX + "px";
  enemy.style.top = enemyY + "px";
}

function checkEnemyHit() {
  if (!checkCollision(character, enemy)) return;
  lives = lives - 1;
  posX = 200;
  posY = 200;
  updateDisplay();
  if (lives <= 0) {
    gameOver = true;
    gameOverScreen.style.display = "flex";
  }
}

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

setInterval(function () {
  if (gameOver) return;
  collectItem();
  moveEnemy();
  checkEnemyHit();
}, 30);

document.getElementById("restart-btn").addEventListener("click", function () {
  location.reload();
});
