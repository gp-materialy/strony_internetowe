document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".element");

    window.toggleActive = function(index) {
        const item = gridItems[index];
        item.classList.toggle("active");
        checkCrafting();
    }

    function checkCrafting() {
        const activeIndexes = [];
        gridItems.forEach((item, index) => {
            if (item.classList.contains("active")) {
                activeIndexes.push(index);
            }
        });

        let result = "Hmm.. o co Ci może chodzić...";

        if (arraysEqual(activeIndexes, [1, 4, 7])) {
            result = "Tworzymy łopatę lub miecz?";
        } else if (arraysEqual(activeIndexes, [0, 1, 2, 4, 7])) {
            result = "Tworzymy kilof?";
        } else if (arraysEqual(activeIndexes, [6, 4, 2])) {
            result = "Tworzymy nożyce?";
        } else if (arraysEqual(activeIndexes, [0, 1, 3, 4, 7])) {
            result = "Tworzymy siekierę?";
        } else if (arraysEqual(activeIndexes, [0, 1, 3, 5, 6, 7])) {
            result = "Tworzymy łuk?";
        } else if (arraysEqual(activeIndexes, [1, 2, 3, 5, 7, 8])) {
            result = "Tworzymy łuk?";
        } else if (arraysEqual(activeIndexes, [4, 7])) {
            result = "Tworzymy pochodnię lub dźwignię?";
        } else if (arraysEqual(activeIndexes, [0, 1, 2, 3, 4, 5, 6, 7, 8])) {
            result = "Nie tak łatwo stworzyć wszystko :)";
        }

        document.getElementById("odpowiedz").textContent = result;
    }

    function arraysEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
});