"use strict";

let avatarEl = document.getElementById("avatar");
let nameEl = document.getElementById("name");
let titleEl = document.getElementById("title");
let hpFill = document.getElementById("hp-fill");
let hpText = document.getElementById("hp-text");
let levelEl = document.getElementById("level");
let strengthEl = document.getElementById("strength");
let intelligenceEl = document.getElementById("intelligence");
let levelUpBtn = document.getElementById("level-up-btn");
let damageBtn = document.getElementById("damage-btn");
let healBtn = document.getElementById("heal-btn");

let player = {
  name: "Felix",
  title: "Wojownik",
  hp: 100,
  maxHp: 100,
  level: 1,
  strength: 5,
  intelligence: 3
};

function renderCard() {
  nameEl.textContent = player.name;
  titleEl.textContent = player.title;
  avatarEl.src = "https://api.dicebear.com/9.x/adventurer/svg?seed=" + player.name;
  hpFill.style.width = (player.hp / player.maxHp * 100) + "%";
  hpText.textContent = player.hp + "/" + player.maxHp;
  levelEl.textContent = player.level;
  strengthEl.textContent = player.strength;
  intelligenceEl.textContent = player.intelligence;
}

renderCard();

levelUpBtn.addEventListener("click", function () {
  player.level = player.level + 1;
  player.strength = player.strength + 2;
  player.intelligence = player.intelligence + 1;
  player.maxHp = player.maxHp + 10;
  player.hp = player.maxHp;
  renderCard();
});

damageBtn.addEventListener("click", function () {
  player.hp = player.hp - 10;
  if (player.hp < 0) {
    player.hp = 0;
  }
  renderCard();
});

healBtn.addEventListener("click", function () {
  player.hp = player.hp + 15;
  if (player.hp > player.maxHp) {
    player.hp = player.maxHp;
  }
  renderCard();
});
