"use strict";

const words = ["giganci", "funkcja", "wisielec", "javascript"];

const stages = [
  `  +---+
  |   |
      |
      |
      |
      |
=========`,
  `  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
  `  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
  `  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`
];

const word = words[Math.floor(Math.random() * words.length)];
const answers = [];
const used = [];
let isHit = false;
let mistakes = 0;
let remainingLetters = word.length;

// TODO: zakryj haslo znakami _ i wyswietl w elemencie #word-display

document.getElementById("hangman").textContent = stages[0];

document.getElementById("guess-btn").addEventListener("click", function () {
  isHit = false;
  document.getElementById("message").textContent = "";

  const guess = document.getElementById("letter-input").value.toLowerCase();
  document.getElementById("letter-input").value = "";

  if (guess.length === 0) {
    document.getElementById("message").textContent = "Podaj jedna literke!";
    return;
  }

  // TODO: sprawdz czy litera byla juz uzyta i wyswietl komunikat

  used.push(guess);

  // TODO: przeszukaj haslo i odslon trafione litery w tablicy answers

  // TODO: sprawdz warunek zwyciestwa gdy remainingLetters wynosi 0

  // TODO: obsluz nietrafienie i sprawdz przegrana

  document.getElementById("used-letters").textContent =
    "Uzyte litery: " + used.join(", ");
});

// TODO: dodaj obsluge przycisku RESET
