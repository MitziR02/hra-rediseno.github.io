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