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

//Pokazuje w panelu ostatni wynik z gry (jeśli był wcześniej zapisany).
function loadLastResult() {
    const json = localStorage.getItem("lastResult");
    if (json === null) return;
    const data = JSON.parse(json);
    lastScoreDisplay.textContent = data.score;
    lastStatusDisplay.textContent = data.status;
}

//Zbiera dane do jednego wpisu w rankingu: imię gracza + wynik + czy była wygrana/przegrana.
function getEntryData() {
  const json = localStorage.getItem("lastResult");
  const last = json ? JSON.parse(json) : {score: 0, status: "-"};
  return {
    name: nameInput.value || "Anonim",
    score: last.score, status: last.status
  };
}

//Dodaje  wpis do rankingu, układa ranking od najlepszego wyniku i zapisuje go, żeby nie zniknął po odświeżeniu strony.
function saveToRanking() {
  const json = localStorage.getItem("ranking");
  const ranking = json ? JSON.parse(json) : [];
  ranking.push(getEntryData());
  ranking.sort(function(a, b) { return b.score - a.score; });
  localStorage.setItem("ranking", JSON.stringify(ranking));
  displayRanking();
}

//Wyświetla ranking w tabeli (miejsce, imię, wynik, status) i odświeża tabelę po każdej zmianie.
function displayRanking() {
    const json = localStorage.getItem("ranking");
    const ranking = json ? JSON.parse(json) : [];
    rankingBody.innerHTML = "";
    ranking.forEach(function (entry, i) {
        // TODO: stwórz wiersz tabeli z danymi entry i dodaj go do rankingBody
    });
}

//Wypisuje ranking jako tekst (JSON), żeby dało się go skopiować lub wysłać komuś.
function exportData() {
  const json = localStorage.getItem("ranking");
  const ranking = json ? JSON.parse(json) : [];
  exportArea.value = JSON.stringify(ranking, null, 2);
}

//Wczytuje ranking z wklejonego tekstu (JSON) i podmienia aktualny ranking na nowy.
function importData() {
  const ranking = JSON.parse(exportArea.value);
  localStorage.setItem("ranking", JSON.stringify(ranking));
  displayRanking();
  statusMsg.textContent = "Ranking zaimportowany!";
}

loadLastResult();
displayRanking();
// TODO: dodaj obsługę zdarzeń dla przycisków addRankingBtn, exportBtn i importBtn
