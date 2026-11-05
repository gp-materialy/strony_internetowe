"use strict";

const saveToast = new bootstrap.Toast(document.getElementById("saveToast"));
const copyToast = new bootstrap.Toast(document.getElementById("copyToast"));

document.getElementById("toastButton").addEventListener("click", () => {
  saveToast.show();
});

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", () => {
    const code = button.previousElementSibling.textContent;
    navigator.clipboard.writeText(code).then(() => copyToast.show());
  });
});

const loadButton = document.getElementById("loadButton");
const loadProgress = document.getElementById("loadProgress");
const loadBar = document.getElementById("loadBar");

function showProgress(value) {
  loadBar.style.width = value + "%";
  loadBar.textContent = value + "%";
  loadProgress.setAttribute("aria-valuenow", value);
  loadBar.classList.remove("text-bg-danger", "text-bg-warning", "text-bg-success");
  if (value < 50) {
    loadBar.classList.add("text-bg-danger");
  } else if (value < 100) {
    loadBar.classList.add("text-bg-warning");
  } else {
    loadBar.classList.add("text-bg-success");
  }
}

loadButton.addEventListener("click", () => {
  let progress = 0;
  loadButton.disabled = true;
  const timer = setInterval(() => {
    progress += 10;
    showProgress(progress);
    if (progress === 100) {
      clearInterval(timer);
      loadButton.disabled = false;
      saveToast.show();
    }
  }, 300);
});

const sendButton = document.getElementById("sendButton");
const sendButtonContent = sendButton.innerHTML;
const sendAlert = document.getElementById("sendAlert");

sendButton.addEventListener("click", () => {
  sendAlert.innerHTML = "";
  sendButton.disabled = true;
  sendButton.innerHTML = '<span class="spinner-border spinner-border-sm" aria-hidden="true"></span> <span role="status">Wysyłanie...</span>';
  setTimeout(() => {
    sendButton.disabled = false;
    sendButton.innerHTML = sendButtonContent;
    if (Math.random() < 0.7) {
      saveToast.show();
    } else {
      sendAlert.innerHTML = '<div class="alert alert-danger alert-dismissible mb-0" role="alert">Nie udało się wysłać. Sprawdź połączenie z internetem i kliknij „Wyślij” jeszcze raz.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Zamknij"></button></div>';
    }
  }, 2000);
});
