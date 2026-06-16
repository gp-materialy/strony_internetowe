"use strict";
//password: agent007
let attempts = 0;
let passwordInput = document.getElementById("password-input");
let checkBtn = document.getElementById("check-btn");
let message = document.getElementById("message");
let secret = document.getElementById("secret");

checkBtn.addEventListener("click", function () {
  let password = passwordInput.value;

  document.body.classList.remove("granted", "denied");

  if (password === "agent007") {
    message.textContent = "Dostęp przyznany!";
    secret.classList.remove("hidden");
    document.body.classList.add("granted");
  } else {
    attempts += 1;
    message.textContent = "Błędne hasło! Próba: " + attempts;
    secret.classList.add("hidden");
    document.body.classList.add("denied");
  }
});

passwordInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkBtn.click();
  }
});


//captcha: >15

let captchaInput = document.getElementById("captcha-input");
let captchaBtn = document.getElementById("captcha-btn");
let captchaMessage = document.getElementById("captcha-message");

captchaBtn.addEventListener("click", function () {
  let captcha = captchaInput.value;

  if (captcha > "10") {
	captchaMessage.textContent = "Captcha poprawna!";
	captchaMessage.classList.remove("error");
	captchaMessage.classList.add("success");
  } else {
	captchaMessage.textContent = "Captcha niepoprawna!";
	captchaMessage.classList.remove("success");
	captchaMessage.classList.add("error");
  }
});

captchaInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
	captchaBtn.click();
  }
});