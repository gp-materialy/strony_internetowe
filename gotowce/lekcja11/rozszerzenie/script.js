"use strict";

let form = document.getElementById("contact-form");
let result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let category = document.getElementById("category").value;
  let message = document.getElementById("message").value;
  result.textContent = "Kategoria: " + category
    + ". Dziękujemy, " + name
    + "! Telefon: " + phone
    + ", e-mail: " + email + ".";
});
