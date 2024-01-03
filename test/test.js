/* Primer codigo

document.addEventListener("DOMContentLoaded", function () {

    var tableList = document.getElementById("mesaList");
    var addTableButton = document.getElementById("addTable");
    var lastItem =document.getElementById("lastItem");

    var tableCounter = 1;

    function addMesa() {

        var newTable = document.createElement("li");
        newTable.classList.add("table-list__item");

        newTable.id = 'table' + tableCounter;

        newTable.innerHTML = '<h2 class="table-list__item__title">Mesa ' + tableCounter + '</h2>' +
            '<img class="table-list__item__icon" src="./src/assets/icon/iconos-hra-01.svg" alt="table-icon">';
        tableList.insertBefore(newTable, lastItem); 
        tableCounter++;
    }

    addTableButton.addEventListener("click", addMesa);
});
*/



/*document.addEventListener("DOMContentLoaded", function () {

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
*/