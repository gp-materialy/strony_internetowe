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

for (let i = 0; i < word.length; i++) {
  answers[i] = "_";
}
document.getElementById("word-display").textContent = answers.join(" ");
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

  if (used.includes(guess)) {
    document.getElementById("message").textContent =
      "Ta litera byla juz uzyta!";
    return;
  }

  used.push(guess);

  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      isHit = true;
      answers[j] = guess;
      remainingLetters--;
    }
  }
  document.getElementById("word-display").textContent = answers.join(" ");

  if (remainingLetters === 0) {
    document.getElementById("guess-btn").disabled = true;
    document.getElementById("letter-input").disabled = true;
    document.getElementById("message").textContent =
      "Brawo! Haslo to: " + word;
  }

  if (!isHit) {
    mistakes++;
    document.getElementById("hangman").textContent = stages[mistakes];

    if (mistakes >= stages.length - 1) {
      document.getElementById("guess-btn").disabled = true;
      document.getElementById("letter-input").disabled = true;
      document.getElementById("message").textContent =
        "Przegrana! Haslo to: " + word;
    }
  }

  document.getElementById("used-letters").textContent =
    "Uzyte litery: " + used.join(", ");
});

document.getElementById("reset-btn").addEventListener("click", function () {
  window.location.reload();
});
