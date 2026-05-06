"use strict";

let form = document.getElementById("contact-form");
let result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  result.textContent = "Dziękujemy, " + name
    + "! Wiadomość wysłana z adresu " + email + ".";
});
