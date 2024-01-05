
var comensalesInput = document.getElementById("comensalesInput");
var keypadItems = document.getElementById("keypadItems");

var comensales = "";

keypadItems.addEventListener("click", function (event) {
    var clickedItem = event.target;

    if (clickedItem.classList.contains("keypad-item")) {
        var itemValue = clickedItem.textContent;

        if (itemValue === "⬅") {
            comensales = comensales.slice(0, -1);
        } else if (itemValue === "C") {
            comensales = "";
        } else {
            comensales += itemValue;
        }

        comensalesInput.textContent = comensales;
    }
});

