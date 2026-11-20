const pictureInput = document.querySelector("#select-picture");
const canvas = document.querySelector("#meme");
const ctx = canvas.getContext("2d");
const textTop = document.querySelector("#text-top");
const textBottom = document.querySelector("#text-bottom");
const downloadButton = document.querySelector("#download-button");

let picture = null;

drawMeme();

function drawPlaceholder() {
    canvas.width = 800;
    canvas.height = 500;
    ctx.fillStyle = "#e9ecef";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#6c757d";
    ctx.font = "40px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Tu pojawi się Twój mem", canvas.width / 2, canvas.height / 2);
}

function drawMeme() {
    if (picture === null) {
        drawPlaceholder();
        return;
    }

    canvas.width = picture.width;
    canvas.height = picture.height;
    ctx.drawImage(picture, 0, 0);

    const fontSize = Math.floor(canvas.width / 10);
    const margin = canvas.height / 25;
    const maxWidth = canvas.width * 0.9;
    ctx.font = fontSize + "px Impact, sans-serif";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 8);
    ctx.lineJoin = "round";
    ctx.textAlign = "center";

    const top = textTop.value.toUpperCase();
    ctx.textBaseline = "top";
    ctx.strokeText(top, canvas.width / 2, margin, maxWidth);
    ctx.fillText(top, canvas.width / 2, margin, maxWidth);

    const bottom = textBottom.value.toUpperCase();
    ctx.textBaseline = "bottom";
    ctx.strokeText(bottom, canvas.width / 2, canvas.height - margin, maxWidth);
    ctx.fillText(bottom, canvas.width / 2, canvas.height - margin, maxWidth);
}

pictureInput.addEventListener("change", function () {
    const file = pictureInput.files[0];
    if (!file) {
        return;
    }

    picture = new Image();
    picture.addEventListener("load", function () {
        drawMeme();
        downloadButton.disabled = false;
    });
    picture.src = URL.createObjectURL(file);
});

textTop.addEventListener("input", drawMeme);
textBottom.addEventListener("input", drawMeme);

downloadButton.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "meme.png";
    link.click();
});
