"use strict";

const nameInput = document.getElementById("player-name");
const lastScoreDisplay = document.getElementById("last-score");
const lastStatusDisplay = document.getElementById("last-status");
const statusMsg = document.getElementById("status-msg");
const rankingBody = document.getElementById("ranking-body");
const exportArea = document.getElementById("export-area");
const addRankingBtn = document.getElementById("add-ranking-btn");
const exportBtn = document.getElementById("export-btn");
const importBtn = document.getElementById("import-btn");

function loadLastResult() {
  const json = localStorage.getItem("lastResult");
  if (json === null) return;
  const data = JSON.parse(json);
  lastScoreDisplay.textContent = data.score;
  lastStatusDisplay.textContent = data.status;
}

function getEntryData() {
  const json = localStorage.getItem("lastResult");
  const last = json ? JSON.parse(json) : {score: 0, status: "-"};
  return {
    name: nameInput.value || "Anonim",
    score: last.score, status: last.status
  };
}

function saveToRanking() {
  const json = localStorage.getItem("ranking");
  const ranking = json ? JSON.parse(json) : [];
  ranking.push(getEntryData());
  ranking.sort(function(a, b) { return b.score - a.score; });
  localStorage.setItem("ranking", JSON.stringify(ranking));
  displayRanking();
  statusMsg.textContent = "Wynik dodany do rankingu!";
}

function displayRanking() {
  const json = localStorage.getItem("ranking");
  const ranking = json ? JSON.parse(json) : [];
  rankingBody.innerHTML = "";
  ranking.forEach(function(entry, i) {
    const tr = document.createElement("tr");
    tr.innerHTML = "<td>" + (i + 1) + "</td><td>"
      + entry.name + "</td><td>"
      + entry.score + "</td><td>"
      + entry.status + "</td>";
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
  statusMsg.textContent = "Ranking zaimportowany!";
}

loadLastResult();
displayRanking();
addRankingBtn.addEventListener("click", saveToRanking);
exportBtn.addEventListener("click", exportData);
importBtn.addEventListener("click", importData);
