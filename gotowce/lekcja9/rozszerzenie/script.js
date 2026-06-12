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

let autoMode = false;
let autoTimer = null;

function toggleAuto() {
    autoMode = !autoMode;
    if (autoMode) {
        autoTimer = setInterval(drawItem, 3000);
    } else {
        clearInterval(autoTimer);
    }
}

function changeBackground() {
    let colors = ["#1a1a2e", "#2d132c", "#0a3d62", "#1b4332", "#3d0c02"];
    let index = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[index];
}
