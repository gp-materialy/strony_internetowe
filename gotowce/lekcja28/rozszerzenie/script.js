"use strict";

const lightbox = document.getElementById("lightbox");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxDesc = document.getElementById("lightboxDesc");
const thumbs = document.querySelectorAll("[data-img]");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");
let currentIndex = 0;

function showPhoto(index) {
  const thumb = thumbs[index];
  lightboxTitle.textContent = thumb.dataset.title;
  lightboxImg.src = thumb.dataset.img;
  lightboxImg.alt = thumb.querySelector("img").alt;
  lightboxDesc.textContent = thumb.dataset.desc;
  currentIndex = index;
}

lightbox.addEventListener("show.bs.modal", function (event) {
  const index = Array.from(thumbs).indexOf(event.relatedTarget);
  showPhoto(index);
});

prevPhoto.addEventListener("click", function () {
  let index = currentIndex - 1;
  if (index < 0) {
    index = thumbs.length - 1;
  }
  showPhoto(index);
});

nextPhoto.addEventListener("click", function () {
  let index = currentIndex + 1;
  if (index === thumbs.length) {
    index = 0;
  }
  showPhoto(index);
});
