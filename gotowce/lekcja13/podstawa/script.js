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
let table = document.getElementById("album");

function addToAlbum() {
  let sticker = drawSticker();
  counter = counter + 1;
  let row = table.insertRow();
  row.insertCell().textContent = counter;
  row.insertCell().textContent = sticker;
}

let btn = document.getElementById("draw-btn");
btn.addEventListener("click", addToAlbum);
