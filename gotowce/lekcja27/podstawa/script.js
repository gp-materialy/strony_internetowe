"use strict";

const html = document.documentElement;
const themeButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeButton.addEventListener("click", () => {
  if (html.getAttribute("data-bs-theme") === "dark") {
    html.setAttribute("data-bs-theme", "light");
  } else {
    html.setAttribute("data-bs-theme", "dark");
  }
  themeIcon.classList.toggle("bi-moon");
  themeIcon.classList.toggle("bi-sun");
});
