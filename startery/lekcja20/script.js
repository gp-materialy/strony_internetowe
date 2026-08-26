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
  // TODO: obsłuż ruch postaci strzałkami zmieniając posX i posY
  // TODO: obsłuż podskok na spację z flagą isJumping
  // TODO: obsłuż supermoce pod klawiszami 1, 2, 3
  // TODO: dopisz wciśnięty znak do cheatBuffer i sprawdź kody cheatów
});
