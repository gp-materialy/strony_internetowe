"use strict";

let greetBtn = document.getElementById("greet-btn");
let validBtn = document.getElementById("valid-btn");
let searchBtn = document.getElementById("search-btn");
let cipherBtn = document.getElementById("cipher-btn");
let censorBtn = document.getElementById("censor-btn");

greetBtn.addEventListener("click", function () {
    let name = document.getElementById("name-input").value;
    let result = document.getElementById("greet-result");
    // TODO: wyświetl powitanie z imieniem wielkimi literami i liczbą znaków
});

validBtn.addEventListener("click", function () {
    let text = document.getElementById("valid-input").value;
    let result = document.getElementById("valid-result");
    // TODO: sprawdź czy tekst po trimowaniu ma co najmniej 3 znaki
});

searchBtn.addEventListener("click", function () {
    let text = document.getElementById("search-input").value;
    let result = document.getElementById("search-result");
    // TODO: sprawdź czy tekst zawiera słowo "javascript" bez względu na wielkość liter
});

cipherBtn.addEventListener("click", function () {
    let text = document.getElementById("cipher-input").value;
    let result = document.getElementById("cipher-result");
    // TODO: odwróć tekst za pomocą split, reverse i join
});

censorBtn.addEventListener("click", function () {
    let text = document.getElementById("censor-input").value;
    let result = document.getElementById("censor-result");
    // TODO: zamień wszystkie wystąpienia słowa "bug" na "***"
});
