"use strict";

const categories = {
  "Zwierzeta": ["tygrys", "delfin", "papuga falista"],
  "Programowanie": ["funkcja", "javascript", "kod zrodlowy"],
  "Jedzenie": ["pizza", "spaghetti", "frytki z sosem"]
};

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

const categoryNames = Object.keys(categories);
const categoryName =
  categoryNames[Math.floor(Math.random() * categoryNames.length)];
const categoryWords = categories[categoryName];
const word =
  categoryWords[Math.floor(Math.random() * categoryWords.length)];

document.getElementById("category").textContent =
  "Kategoria: " + categoryName;

const answers = [];
const used = [];
let isHit = false;
let mistakes = 0;
let spaces = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] === " ") {
    answers[i] = " ";
    spaces++;
  } else {
    answers[i] = "_";
  }
}
let remainingLetters = word.length - spaces;

document.getElementById("word-display").textContent = answers.join(" ");
document.getElementById("hangman").textContent = stages[0];

function checkGuess() {
  isHit = false;
  document.getElementById("message").textContent = "";

  const guess =
    document.getElementById("letter-input").value.toLowerCase();
  document.getElementById("letter-input").value = "";

  if (guess.length === 0) {
    document.getElementById("message").textContent =
      "Podaj jedna literke!";
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
  document.getElementById("word-display").textContent =
    answers.join(" ");

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
}

document.getElementById("guess-btn").addEventListener(
  "click", checkGuess
);

document.getElementById("letter-input").addEventListener(
  "keydown",
  function (e) {
    if (e.key === "Enter") {
      checkGuess();
    }
  }
);

document.getElementById("reset-btn").addEventListener(
  "click",
  function () {
    window.location.reload();
  }
);
