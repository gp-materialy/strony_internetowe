"use strict";

let greetBtn = document.getElementById("greet-btn");
let validBtn = document.getElementById("valid-btn");
let searchBtn = document.getElementById("search-btn");
let cipherBtn = document.getElementById("cipher-btn");
let censorBtn = document.getElementById("censor-btn");
let passBtn = document.getElementById("pass-btn");
let statsBtn = document.getElementById("stats-btn");
let initialsBtn = document.getElementById("initials-btn");

greetBtn.addEventListener("click", function () {
    let name = document.getElementById("name-input").value;
    let result = document.getElementById("greet-result");
    let clean = name.trim();
    if (clean.length === 0) {
        result.textContent = "Wpisz swoje imię!";
        return;
    }
    let upper = clean.toUpperCase();
    result.textContent = "Cześć, " + upper + "! Twoje imię ma " + clean.length + " znaków.";
});

validBtn.addEventListener("click", function () {
    let text = document.getElementById("valid-input").value;
    let result = document.getElementById("valid-result");
    let clean = text.trim();
    if (clean.length < 3) {
        result.textContent = "❌ Za krótki tekst! Minimum 3 znaki.";
    } else {
        result.textContent = "✅ Poprawny: \"" + clean + "\" (" + clean.length + " zn.)";
    }
});

searchBtn.addEventListener("click", function () {
    let text = document.getElementById("search-input").value;
    let result = document.getElementById("search-result");
    let lower = text.toLowerCase();
    let found = lower.includes("javascript");
    if (found) {
        result.textContent = "✅ Znaleziono słowo \"javascript\"!";
    } else {
        result.textContent = "❌ Nie znaleziono słowa \"javascript\".";
    }
});

cipherBtn.addEventListener("click", function () {
    let text = document.getElementById("cipher-input").value;
    let result = document.getElementById("cipher-result");
    let letters = text.split("");
    let reversed = letters.reverse();
    let joined = reversed.join("");
    result.textContent = "Wynik: " + joined;
});

censorBtn.addEventListener("click", function () {
    let text = document.getElementById("censor-input").value;
    let result = document.getElementById("censor-result");
    let censored = text.replaceAll("bug", "***");
    censored = censored.replaceAll("error", "***");
    result.textContent = censored;
});

passBtn.addEventListener("click", function () {
    let pass = document.getElementById("pass-input").value;
    let passResult = document.getElementById("pass-result");
    let hasDigit = false;
    let digits = "0123456789";
    for (let i = 0; i < digits.length; i++) {
        if (pass.includes(digits[i])) {
            hasDigit = true;
        }
    }
    if (pass.length >= 8 && hasDigit) {
        passResult.textContent = "💪 Silne hasło!";
    } else {
        passResult.textContent = "⚠️ Słabe hasło.";
    }
});

statsBtn.addEventListener("click", function () {
    let text = document.getElementById("stats-input").value;
    let statsResult = document.getElementById("stats-result");
    let trimmed = text.trim();
    let words = trimmed.split(" ").filter(w => w.length > 0);
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    statsResult.textContent = "Słów: " + words.length + " | Najdłuższe: " + longest + " (" + longest.length + " zn.)";
});

initialsBtn.addEventListener("click", function () {
    let text = document.getElementById("initials-input").value;
    let initialsResult = document.getElementById("initials-result");
    let words = text.trim().split(" ").filter(w => w.length > 0);
    let initials = "";
    for (let i = 0; i < words.length; i++) {
        initials += words[i].slice(0, 1).toUpperCase();
    }
    let formatted = initials.split("").join(".");
    initialsResult.textContent = "Inicjały: " + formatted;
});
