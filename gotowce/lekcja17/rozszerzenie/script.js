"use strict";

let avatarEl = document.getElementById("avatar");
let nameEl = document.getElementById("name");
let titleEl = document.getElementById("title");
let hpFill = document.getElementById("hp-fill");
let hpText = document.getElementById("hp-text");
let levelEl = document.getElementById("level");
let strengthEl = document.getElementById("strength");
let intelligenceEl = document.getElementById("intelligence");
let defenseEl = document.getElementById("defense");
let levelUpBtn = document.getElementById("level-up-btn");
let damageBtn = document.getElementById("damage-btn");
let healBtn = document.getElementById("heal-btn");
let nameInput = document.getElementById("name-input");
let nameBtn = document.getElementById("name-btn");

let player = {
  name: "Felix",
  title: "Wojownik",
  hp: 100,
  maxHp: 100,
  level: 1,
  strength: 5,
  intelligence: 3,
  defense: 2,
  levelUp: function () {
    this.level = this.level + 1;
    this.strength = this.strength + 2;
    this.intelligence = this.intelligence + 1;
    this.defense = this.defense + 1;
    this.maxHp = this.maxHp + 10;
    this.hp = this.maxHp;
  }
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
  defenseEl.textContent = player.defense;
}

renderCard();

levelUpBtn.addEventListener("click", function () {
  player.levelUp();
  renderCard();
});

damageBtn.addEventListener("click", function () {
  let damage = 10 - player.defense;
  if (damage < 1) {
    damage = 1;
  }
  player.hp = player.hp - damage;
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

nameBtn.addEventListener("click", function () {
  if (nameInput.value.length > 0) {
    player.name = nameInput.value;
    renderCard();
  }
});
