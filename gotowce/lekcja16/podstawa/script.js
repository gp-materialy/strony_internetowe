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
});
