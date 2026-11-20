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

    // TODO: ustaw rozmiar canvasu na rozmiar obrazka i narysuj obrazek od lewego górnego rogu

    // TODO: ustaw wygląd napisów: czcionka Impact zależna od szerokości obrazka, białe wypełnienie, czarny obrys, wyśrodkowanie

    // TODO: narysuj górny napis wielkimi literami przy górnej krawędzi obrazka

    // TODO: narysuj dolny napis wielkimi literami przy dolnej krawędzi obrazka
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

// TODO: po każdej zmianie tekstu w polu górnego i dolnego napisu narysuj mema od nowa

downloadButton.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "meme.png";
    link.click();
});
