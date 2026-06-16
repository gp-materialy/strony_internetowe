"use strict";

const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlock");
const message = document.getElementById("message");
const secret = document.getElementById("secret");
const showCheckbox = document.getElementById("show");

let attempts = 0;

unlockButton.addEventListener("click", checkPassword);

passwordInput.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		checkPassword();
	}
});

showCheckbox.addEventListener("change", function () {
	if (showCheckbox.checked) {
		passwordInput.type = "text";
	} else {
		passwordInput.type = "password";
	}
});

function checkPassword() {
	const value = passwordInput.value;
	switch (value) {
		case "agent007":
			unlock("Witaj, agencie 007.");
			break;
		case "szef":
			unlock("Dzień dobry, szefie.");
			break;
		case "technik":
			unlock("Cześć, techniku.");
			break;
		default:
			denyAccess();
	}
}

function unlock(text) {
	document.body.classList.add("unlocked");
	secret.classList.remove("hidden");
	message.textContent = text;
}

function denyAccess() {
	document.body.classList.remove("unlocked");
	secret.classList.add("hidden");
	attempts = attempts + 1;
	message.textContent = "Brak dostępu. Próby: " + attempts;
	if (attempts >= 3) {
		unlockButton.disabled = true;
	}
}
