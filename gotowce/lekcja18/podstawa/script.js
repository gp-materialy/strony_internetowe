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

let gameOver = false;

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

function addLog(text) {
  let entry = document.createElement("p");
  entry.textContent = text;
  logEl.prepend(entry);
}

function calculateDamage(attackPower, defense) {
  let damage = attackPower - defense;
  if (damage < 1) {
    damage = 1;
  }
  return damage;
}

function performAttack(attacker, defender, attackPower) {
  let damage = calculateDamage(attackPower, defender.defense);
  defender.hp = defender.hp - damage;
  if (defender.hp < 0) {
    defender.hp = 0;
  }
  addLog(attacker.name + " (" + attackPower + " siły) zadaje " + damage + " obrażeń.");
  renderArena();
}

function validateNumber(value, min, max) {
  let number = Number(value);
  if (isNaN(number)) {
    return false;
  }
  if (number < min || number > max) {
    return false;
  }
  return number;
}

function checkWinner() {
  if (enemy.hp <= 0) {
    addLog("🏆 " + hero.name + " wygrywa walkę!");
    gameOver = true;
  }
  if (hero.hp <= 0) {
    addLog("💀 " + enemy.name + " wygrywa walkę!");
    gameOver = true;
  }
}

function enemyTurn() {
  let power = Math.round(Math.random() * enemy.strength) + 1;
  performAttack(enemy, hero, power);
  checkWinner();
}

quickBtn.addEventListener("click", function () {
  if (gameOver) {
    return;
  }
  performAttack(hero, enemy, hero.strength);
  checkWinner();
  if (!gameOver) {
    enemyTurn();
  }
});

heavyBtn.addEventListener("click", function () {
  if (gameOver) {
    return;
  }
  performAttack(hero, enemy, hero.strength * 2);
  checkWinner();
  if (!gameOver) {
    enemyTurn();
  }
});

customBtn.addEventListener("click", function () {
  if (gameOver) {
    return;
  }
  let power = validateNumber(customPower.value, 1, 20);
  if (power === false) {
    addLog("⚠️ Wpisz liczbę od 1 do 20!");
    return;
  }
  performAttack(hero, enemy, power);
  checkWinner();
  if (!gameOver) {
    enemyTurn();
  }
});
