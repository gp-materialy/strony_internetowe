"use strict";

let stickers = [
  "Lew", "Panda", "Delfin",
  "Orzeł", "Tygrys", "Żółw"
];

// TODO: zamień tablicę naklejek na tablicę obiektów Task
// TODO: dodaj funkcję tworzącą obiekt Task z tytułem, datą i statusem
// TODO: dodaj funkcję renderującą listę zadań w DOM
// TODO: dodaj obsługę dodawania nowego zadania z formularza
// TODO: dodaj obsługę zmiany statusu zadania
// TODO: dodaj obsługę usuwania zadania z listy

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
