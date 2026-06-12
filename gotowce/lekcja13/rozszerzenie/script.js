"use strict";

let stickers = [
  "Lew", "Panda", "Delfin",
  "Orzeł", "Tygrys", "Żółw",
  "Koala", "Flaming", "Wilk"
];

function drawSticker() {
  let index = Math.floor(Math.random() * stickers.length);
  return stickers[index];
}

let counter = 0;
let collected = [];
let table = document.getElementById("album");

function addToAlbum() {
  let sticker = drawSticker();
  if (collected.includes(sticker)) {
    return;
  }
  collected.push(sticker);
  counter = counter + 1;
  let row = table.insertRow();
  row.insertCell().textContent = counter;
  row.insertCell().textContent = sticker;
}

let btn = document.getElementById("draw-btn");
btn.addEventListener("click", addToAlbum);
