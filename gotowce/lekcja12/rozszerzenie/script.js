"use strict";

const btn = document.getElementById("run-btn");
const container = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");
const timerBar = document.getElementById("timer-bar");

let clicks = 0;
const winAt = 3;
const totalTime = 15;
let timeLeft = totalTime;
const colors = ["#e94560", "#00b4d8", "#06d6a0", "#ffd166", "#ef476f"];

function moveButton() {
  btn.style.animation = "shake 0.2s";
  const maxX = container.clientWidth - btn.offsetWidth;
  const maxY = container.clientHeight - btn.offsetHeight;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  btn.style.left = newX + "px";
  btn.style.top = newY + "px";
  setTimeout(function () {
    btn.style.animation = "pulse 1.5s infinite";
  }, 200);
}

function spawnStars() {
  for (let i = 0; i < 8; i++) {
    const star = document.createElement("span");
    star.textContent = "⭐";
    star.className = "star";
    star.style.left = btn.style.left;
    star.style.top = btn.style.top;
    container.appendChild(star);
  }
}

btn.addEventListener("mouseover", moveButton);

const timer = setInterval(function () {
  timeLeft = timeLeft - 1;
  const percent = (timeLeft / totalTime) * 100;
  timerBar.style.width = percent + "%";
  if (timeLeft <= 0) {
    clearInterval(timer);
    btn.removeEventListener("mouseover", moveButton);
    message.textContent = "Czas minął!";
  }
}, 1000);

btn.addEventListener("click", function () {
  clicks = clicks + 1;
  scoreDisplay.textContent = "Kliknięcia: " + clicks;
  btn.style.backgroundColor = colors[clicks % colors.length];
  if (clicks >= winAt) {
    clearInterval(timer);
    btn.removeEventListener("mouseover", moveButton);
    message.textContent = "Brawo! Udało Ci się!";
    spawnStars();
  }
});
