"use strict";

const iloscPytan = document.querySelectorAll(".pytanieKontener").length;
let poprawneOdpowiedzi = 0;

document.getElementById("sprawdz").addEventListener("click", function() {
  poprawneOdpowiedzi = 0;

  for (let i = 1; i <= iloscPytan; i++) {
    document.querySelector("#pytanie" + i).classList.remove("poprawna");
    document.querySelector("#pytanie" + i).classList.remove("bledna");
  }

  for (let i = 1; i <= iloscPytan; i++) {
    for (let j = 1; j <= 3; j++) {
      if (document.getElementById("p" + i + "-odp" + j).checked &&
          document.getElementById("p" + i + "-odp" + j).classList.contains("poprawna")) {
        poprawneOdpowiedzi++;
        document.querySelector("#pytanie" + i).classList.remove("bledna");
        document.querySelector("#pytanie" + i).classList.add("poprawna");
        break;
      } else {
        document.querySelector("#pytanie" + i).classList.add("bledna");
      }
    }
  }

  document.getElementById("wynik").textContent =
    "Poprawne odpowiedzi " + poprawneOdpowiedzi + "/" + iloscPytan;

  let komunikat = document.getElementById("komunikat");
  if (poprawneOdpowiedzi === iloscPytan) {
    komunikat.textContent = "Brawo! Znasz wszystkich bossów!";
  } else if (poprawneOdpowiedzi >= iloscPytan / 2) {
    komunikat.textContent = "Nieźle! Znasz się na bossach!";
  } else {
    komunikat.textContent = "Spróbuj jeszcze raz!";
  }
});

document.getElementById("resetuj").addEventListener("click", function() {
  poprawneOdpowiedzi = 0;
  document.getElementById("wynik").textContent = "";
  document.getElementById("komunikat").textContent = "";
  for (let i = 1; i <= iloscPytan; i++) {
    document.querySelector("#pytanie" + i).classList.remove("poprawna");
    document.querySelector("#pytanie" + i).classList.remove("bledna");
    for (let j = 1; j <= 3; j++) {
      document.getElementById("p" + i + "-odp" + j).checked = false;
    }
  }
});
