"use strict";

const lightbox = document.getElementById("lightbox");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxDesc = document.getElementById("lightboxDesc");

lightbox.addEventListener("show.bs.modal", function (event) {
  const thumb = event.relatedTarget;
  lightboxTitle.textContent = thumb.dataset.title;
  lightboxImg.src = thumb.dataset.img;
  lightboxImg.alt = thumb.querySelector("img").alt;
  lightboxDesc.textContent = thumb.dataset.desc;
});
