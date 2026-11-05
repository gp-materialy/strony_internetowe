"use strict";

const saveToast = new bootstrap.Toast(document.getElementById("saveToast"));

document.getElementById("toastButton").addEventListener("click", () => {
  saveToast.show();
});

const loadButton = document.getElementById("loadButton");
const loadProgress = document.getElementById("loadProgress");
const loadBar = document.getElementById("loadBar");

function showProgress(value) {
  loadBar.style.width = value + "%";
  loadBar.textContent = value + "%";
  loadProgress.setAttribute("aria-valuenow", value);
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

sendButton.addEventListener("click", () => {
  sendButton.disabled = true;
  sendButton.innerHTML = '<span class="spinner-border spinner-border-sm" aria-hidden="true"></span> <span role="status">Wysyłanie...</span>';
  setTimeout(() => {
    sendButton.disabled = false;
    sendButton.innerHTML = sendButtonContent;
    saveToast.show();
  }, 2000);
});
