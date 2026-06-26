"use strict";

let heroNameEl = document.getElementById("hero-name");
let heroHpFill = document.getElementById("hero-hp-fill");
let heroHpText = document.getElementById("hero-hp-text");
let heroStrengthEl = document.getElementById("hero-strength");
let heroDefenseEl = document.getElementById("hero-defense");

let enemyNameEl = document.getElementById("enemy-name");
let enemyHpFill = document.getElementById("enemy-hp-fill");
let enemyHpText = document.getElementById("enemy-hp-text");
let enemyStrengthEl = document.getElementById("enemy-strength");
let enemyDefenseEl = document.getElementById("enemy-defense");

let quickBtn = document.getElementById("quick-btn");
let heavyBtn = document.getElementById("heavy-btn");
let customBtn = document.getElementById("custom-btn");
let customPower = document.getElementById("custom-power");
let logEl = document.getElementById("log");

let hero = {
  name: "Felix",
  hp: 100,
  maxHp: 100,
  strength: 8,
  defense: 3
};

let enemy = {
  name: "Goblin",
  hp: 80,
  maxHp: 80,
  strength: 6,
  defense: 2
};

function renderArena() {
  heroNameEl.textContent = hero.name;
  heroHpFill.style.width = (hero.hp / hero.maxHp * 100) + "%";
  heroHpText.textContent = hero.hp + "/" + hero.maxHp;
  heroStrengthEl.textContent = hero.strength;
  heroDefenseEl.textContent = hero.defense;

  enemyNameEl.textContent = enemy.name;
  enemyHpFill.style.width = (enemy.hp / enemy.maxHp * 100) + "%";
  enemyHpText.textContent = enemy.hp + "/" + enemy.maxHp;
  enemyStrengthEl.textContent = enemy.strength;
  enemyDefenseEl.textContent = enemy.defense;
}

renderArena();

// TODO: napisz funkcję addLog, która przyjmuje tekst i dodaje nowy wpis na początek dziennika walki
// TODO: napisz funkcję calculateDamage, która przyjmuje siłę ataku i obronę, a zwraca obliczone obrażenia (minimum 1)
// TODO: napisz funkcję performAttack, która przyjmuje atakującego, obrońcę i siłę ataku, a następnie oblicza i zadaje obrażenia
// TODO: napisz funkcję validateNumber, która przyjmuje wartość, minimum i maksimum, a zwraca poprawną liczbę lub false
// TODO: napisz funkcję enemyTurn, która wykonuje kontratak przeciwnika z losową siłą
// TODO: napisz funkcję checkWinner, która sprawdza czy któryś z bohaterów przegrał

quickBtn.addEventListener("click", function () {
  // TODO: wykonaj atak bohatera z jego siłą i uruchom kontratak
});

heavyBtn.addEventListener("click", function () {
  // TODO: wykonaj atak bohatera z podwojoną siłą i uruchom kontratak
});

customBtn.addEventListener("click", function () {
  // TODO: pobierz wartość z inputa, zwaliduj i wykonaj atak
});
