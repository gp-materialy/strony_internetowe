"use strict";

let attempts = 0;

let passwordInput = document.getElementById("password-input");
let checkBtn = document.getElementById("check-btn");
let toggleBtn = document.getElementById("toggle-visibility");
let message = document.getElementById("message");
let secret = document.getElementById("secret");
let secretLimited = document.getElementById("secret-limited");

checkBtn.addEventListener("click", function () {
  let password = passwordInput.value;

  document.body.classList.remove("granted", "denied", "limited");
  secret.classList.add("hidden");
  secretLimited.classList.add("hidden");

  switch (password) {
    case "agent007":
      message.textContent = "Dostęp pełny!";
      secret.classList.remove("hidden");
      document.body.classList.add("granted");
      break;
    case "gosc":
      message.textContent = "Dostęp ograniczony.";
      secretLimited.classList.remove("hidden");
      document.body.classList.add("limited");
      break;
    default:
      attempts += 1;
      message.textContent = "Błędne hasło! Próba: " + attempts;
      document.body.classList.add("denied");

      if (attempts >= 3) {
        passwordInput.disabled = true;
        checkBtn.disabled = true;
        message.textContent = "Konto zablokowane!";
      }
      break;
  }
});

passwordInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkBtn.click();
  }
});

toggleBtn.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "🙈";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "👁";
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