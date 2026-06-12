"use strict";

const btn = document.getElementById("run-btn");
const container = document.getElementById("game-container");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");

let clicks = 0;
const winAt = 3;

function moveButton() {
  const maxX = container.clientWidth - btn.offsetWidth;
  const maxY = container.clientHeight - btn.offsetHeight;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  btn.style.left = newX + "px";
  btn.style.top = newY + "px";
}

btn.addEventListener("mouseover", moveButton);

btn.addEventListener("click", function () {
  clicks = clicks + 1;
  scoreDisplay.textContent = "Kliknięcia: " + clicks;
  if (clicks >= winAt) {
    btn.removeEventListener("mouseover", moveButton);
    message.textContent = "Brawo! Udało Ci się!";
  }
});
