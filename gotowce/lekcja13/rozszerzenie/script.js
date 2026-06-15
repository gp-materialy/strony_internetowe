"use strict";

let stickers = [
  "Lew", "Panda", "Delfin",
  "Orzeł", "Tygrys", "Żółw",
  "Koala", "Flaming", "Wilk"
];

let adjective = [
  "Bystrzak", "Złotko", "Cudak",
  "Gigant", "Maluch", "Cykacz",
  "Kolos", "Śpioch", "Tytan"
];

let emoji = [
  "🦁", "🐼", "🐬",
  "🦅", "🐅", "🐢",
  "🐨", "🦩", "🐺"
];

function drawSticker() {
  let index = Math.floor(Math.random() * stickers.length);
  let index2 = Math.floor(Math.random() * adjective.length);
  let name = stickers[index] + " " + adjective[index2] + " " + emoji[index];
  return name;
}

function drawRank() {
  let roll = Math.random();
    if (roll < 0.01) return "Mityczna";
  if (roll < 0.05) return "Legendarna";
  if (roll < 0.20) return "Epicka";
  if (roll < 0.50) return "Rzadka";
  return "Zwykła";
}

let counter = 0;
let collected = [];
let table = document.getElementById("album");

function addToAlbum() {
  let sticker = drawSticker();
  if (collected.includes(sticker)) {
    return;
  }
    let rank = drawRank();
  collected.push(sticker);
  counter = counter + 1;
  let row = table.insertRow();
  row.insertCell().textContent = counter;
  row.insertCell().textContent = sticker;
  row.insertCell().textContent = rank;
  row.classList.add(rank);
  info.textContent = "Zebrane naklejki: " + counter;
}

let btn = document.getElementById("draw-btn");
btn.addEventListener("click", addToAlbum);



let nameInput = document.getElementById("custom-name");
let rankSelect = document.getElementById("custom-rank");
let info = document.getElementById("info");

function addCustom() {
  let name = nameInput.value;
  if (name === "") {
    alert("Wpisz nazwę naklejki!");
    return;
  }
  counter = counter + 1;
  let row = table.insertRow();
  row.insertCell().textContent = counter;
  row.insertCell().textContent = name;
  row.insertCell().textContent = rankSelect.value;
  row.classList.add(rankSelect.value);
  info.textContent = "Zebrane naklejki: " + counter;
  nameInput.value = "";
}

let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addCustom);