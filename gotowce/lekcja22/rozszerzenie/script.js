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

function getPlayerData() {
  return {
    name: nameInput.value || "Anonim",
    score: score,
    level: level,
    date: new Date().toLocaleString("pl-PL")
  };
}

function showStatus(text) {
  statusMsg.textContent = text;
  setTimeout(function () {
    statusMsg.textContent = "";
  }, 3000);
}

function saveGame() {
  const data = getPlayerData();
  const json = JSON.stringify(data);
  localStorage.setItem("saveGame", json);
  showStatus("Gra zapisana!");
}

function loadGame() {
  const json = localStorage.getItem("saveGame");
  if (json === null) return;
  const data = JSON.parse(json);
  nameInput.value = data.name;
  score = data.score;
  updateDisplay();
  showStatus("Gra wczytana!");
}

function clearSave() {
  localStorage.removeItem("saveGame");
  score = 0;
  nameInput.value = "";
  updateDisplay();
  showStatus("Zapis usunięty!");
}

function saveToRanking() {
  const json = localStorage.getItem("ranking");
  const ranking = json ? JSON.parse(json) : [];
  ranking.push(getPlayerData());
  ranking.sort(function (a, b) {
    return b.score - a.score;
  });
  ranking.splice(10);
  localStorage.setItem("ranking", JSON.stringify(ranking));
  displayRanking();
}

function displayRanking() {
  const json = localStorage.getItem("ranking");
  const ranking = json ? JSON.parse(json) : [];
  rankingBody.innerHTML = "";
  ranking.forEach(function (entry, i) {
    const tr = document.createElement("tr");
    tr.innerHTML = "<td>" + (i + 1) + "</td><td>"
      + entry.name + "</td><td>"
      + entry.score + "</td><td>"
      + entry.level + "</td><td>"
      + (entry.date || "-") + "</td>";
    rankingBody.appendChild(tr);
  });
}

function exportData() {
  const json = localStorage.getItem("ranking");
  const ranking = json ? JSON.parse(json) : [];
  exportArea.value = JSON.stringify(ranking, null, 2);
}

function importData() {
  const ranking = JSON.parse(exportArea.value);
  localStorage.setItem("ranking", JSON.stringify(ranking));
  displayRanking();
  showStatus("Ranking zaimportowany!");
}

saveBtn.addEventListener("click", saveGame);
loadBtn.addEventListener("click", loadGame);
clearBtn.addEventListener("click", clearSave);
addRankingBtn.addEventListener("click", saveToRanking);
exportBtn.addEventListener("click", exportData);
importBtn.addEventListener("click", importData);

loadGame();
displayRanking();
