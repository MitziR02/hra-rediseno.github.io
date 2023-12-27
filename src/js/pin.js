
document.addEventListener("DOMContentLoaded", function () {

    var correctPin = "1234";
    var enteredPin = "";

    // DOM
    var outputList = document.querySelector(".output__list");
    var keypadList = document.querySelector(".keypad__list");

    //Print PIN
    function updatePinOutput() {
        var pinDigits = enteredPin.split("");
        for (var i = 0; i < 4; i++) {
            outputList.children[i].textContent = pinDigits[i] || "0";
        }
    }

    // btns clicks
    function handleKeypadClick(event) {
        var clickedButton = event.target;

        //validar btns dek keypad
        if (clickedButton.classList.contains("keypad__item")) {
            var buttonValue = clickedButton.textContent;

            if (buttonValue === "⬅") {
                enteredPin = enteredPin.slice(0, -1);
            } else if (buttonValue === "C") {
                enteredPin = "";
            } else {
                enteredPin += buttonValue;
            }

            updatePinOutput();
        }
    }

    // Validar PIN
    function enterButtonClick() {
        if (enteredPin === correctPin) {
            window.location.href = "./mesas.html";
        } else {
            enteredPin = "";
            updatePinOutput();
            alert("PIN incorrecto. Inténtalo de nuevo.");
        }
    }

    // Eventos de cliks
    keypadList.addEventListener("click", handleKeypadClick);

    var enterButton = document.querySelector(".btn");
    enterButton.addEventListener("click", enterButtonClick);
});
