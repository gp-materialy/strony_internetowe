"use strict";

let counter = 0;

function addPoint() {
    counter = counter + 1;
    document.getElementById("counter-display").textContent = counter;
}

function resetCounter() {
    counter = 0;
    document.getElementById("counter-display").textContent = counter;
}

let items = ["Wojownik", "Mag", "Łucznik", "Złodziej", "Uzdrowiciel"];

function drawItem() {
    let index = Math.floor(Math.random() * items.length);
    document.getElementById("random-display").textContent = items[index];
}
