"use strict";

const nameInput = document.getElementById("player-name");
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");
const statusMsg = document.getElementById("status-msg");
const rankingBody = document.getElementById("ranking-body");
const exportArea = document.getElementById("export-area");
const saveBtn = document.getElementById("save-btn");
const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");
const addScoreBtn = document.getElementById("add-score-btn");
const bonusBtn = document.getElementById("bonus-btn");
const addRankingBtn = document.getElementById("add-ranking-btn");
const exportBtn = document.getElementById("export-btn");
const importBtn = document.getElementById("import-btn");

let score = 0;
let level = 1;

function updateDisplay() {
  scoreDisplay.textContent = score;
  level = Math.floor(score / 100) + 1;
  levelDisplay.textContent = level;
}

addScoreBtn.addEventListener("click", function () {
  score = score + 10;
  updateDisplay();
});

bonusBtn.addEventListener("click", function () {
  score = score + 50;
  updateDisplay();
});

// TODO: napisz funkcję getPlayerData() zwracającą obiekt z danymi gracza
// TODO: napisz funkcje saveGame() i loadGame() używające localStorage i JSON
// TODO: napisz funkcje saveToRanking() i displayRanking() obsługujące ranking
// TODO: napisz funkcje exportData() i importData() do eksportu tekstu JSON
// TODO: podłącz funkcje do przycisków i wczytaj dane na starcie
