"use strict";

const character = document.getElementById("character");
const posXDisplay = document.getElementById("pos-x");
const posYDisplay = document.getElementById("pos-y");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const statusDisplay = document.getElementById("status");
const enemyElements = document.querySelectorAll(".enemy");
const enemySettings = [
  { x: 500, y: 100, speedX: 2, speedY: 2 },
  { x: 100, y: 300, speedX: 3, speedY: -2 },
  { x: 300, y: 200, speedX: -2, speedY: 2 },
  { x: 600, y: 350, speedX: -3, speedY: -2 },
];
const enemies = Array.from(enemyElements).map(function (element, index) {
  const settings = enemySettings[index] || {
    x: 100 + (index * 120) % 500,
    y: 100 + (index * 80) % 300,
    speedX: index % 2 === 0 ? 2 : -2,
    speedY: index % 2 === 0 ? 2 : -2,
  };
  return { element: element, ...settings };
});
const collectibles = document.querySelectorAll(".collectible");
const gameOverScreen = document.getElementById("game-over");

let posX = 200;
let posY = 200;
let isJumping = false;
let score = 0;
let lives = 3;
let gameOver = false;
const step = 20;
const enemyMaxX = 700;
let canBeHit = true;

function updateDisplay() {
  character.style.left = posX + "px";
  character.style.top = posY + "px";
  posXDisplay.textContent = posX;
  posYDisplay.textContent = posY;
  scoreDisplay.textContent = score;
  livesDisplay.textContent = "❤️".repeat(lives);
}

updateDisplay();

// =============================================
// GOTOWE FUNKCJE - nie musisz ich zmieniać!
// =============================================

// Sprawdza czy dwa elementy się dotykają
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

// Sprawdza kolizje z gwiazdkami i dodaje punkty
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

// Przesuwa wszystkich przeciwników i odbija od ścian
function moveEnemies() {
  const area = document.getElementById("game-area");
  const maxX = Math.min(enemyMaxX, area.clientWidth - 40);
  enemies.forEach(function (enemy) {
    enemy.x = enemy.x + enemy.speedX;
    enemy.y = enemy.y + enemy.speedY;
    if (enemy.x <= 0 || enemy.x >= maxX) {
      enemy.speedX = enemy.speedX * -1;
    }
    if (enemy.y <= 0 || enemy.y >= area.clientHeight - 40) {
      enemy.speedY = enemy.speedY * -1;
    }
    enemy.element.style.left = enemy.x + "px";
    enemy.element.style.top = enemy.y + "px";
  });
}

// Sprawdza kolizję z przeciwnikiem i zabiera życie
function hitByEnemy() {
  if (!canBeHit) return;
  const enemyHit = enemies.some(function (enemy) {
    return checkCollision(character, enemy.element);
  });
  if (!enemyHit) return;
  canBeHit = false;
  lives = lives - 1;
  posX = 200;
  posY = 200;
  updateDisplay();
  setTimeout(function () {
    canBeHit = true;
  }, 1000);
}

// =============================================
// STEROWANIE - działa z poprzedniej lekcji
// =============================================

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

// =============================================
// TWOJE ZADANIA - uzupełnij poniższy kod!
// =============================================

// ZADANIE 1: Pętla gry
// Wewnątrz setInterval wywołaj cztery gotowe funkcje:
// collectItem, moveEnemies, hitByEnemy i checkGameOver
setInterval(function () {
  if (gameOver) return;
  // >>> Tu wywołaj cztery funkcje <<<

}, 30);

// ZADANIE 2: Koniec gry
// Wewnątrz funkcji checkGameOver napisz warunek:
// jeśli lives <= 0, to ustaw gameOver na true
// i pokaż ekran przegranej: gameOverScreen.style.display = "flex"
function checkGameOver() {
  // >>> Tu napisz warunek if <<<

}

// ZADANIE 3: Przycisk restartu
// Znajdź przycisk "restart-btn" i dodaj listener "click",
// który przeładuje stronę: location.reload()
// >>> Tu dodaj listener <<<
