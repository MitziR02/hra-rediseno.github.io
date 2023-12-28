document.addEventListener("DOMContentLoaded", function () {

    //Declaracion de variables
    var tableList = document.getElementById("mesaList");
    var addTableButton = document.getElementById("addTable");
    var lastItem = document.getElementById("lastItem");

    var modalComensales = document.getElementById("modal-num-comensales");

    // Leer mesas almacenadas localmente
    var storedTables = JSON.parse(localStorage.getItem('tables')) || [];
    var tableCounter = storedTables.length > 0 ? storedTables[storedTables.length - 1].id + 1 : 1;

    // Agregar mesa
    function addMesa() {
        var newTable = document.createElement("li");
        newTable.classList.add("table-list__item");

        newTable.id = 'table' + tableCounter;

        newTable.innerHTML = '<h2 class="table-list__item__title">Mesa ' + tableCounter + '</h2>' +
            '<img class="table-list__item__icon" src="./src/assets/icon/iconos-hra-01.svg" alt="table-icon">';
        tableList.insertBefore(newTable, lastItem);

        newTable.addEventListener("click", function () {
            showModal();
        });

        var tableInfo = { id: tableCounter };
        storedTables.push(tableInfo);
        localStorage.setItem('tables', JSON.stringify(storedTables));

        tableCounter++;
    }

    // Cargar mesas almacenadas
    function loadStoredTables() {
        for (var i = 0; i < storedTables.length; i++) {
            var newTable = document.createElement("li");
            newTable.classList.add("table-list__item");
            newTable.id = 'table' + storedTables[i].id;
            newTable.innerHTML = '<h2 class="table-list__item__title">Mesa ' + storedTables[i].id + '</h2>' +
                '<img class="table-list__item__icon" src="./src/assets/icon/iconos-hra-01.svg" alt="table-icon">';
            tableList.insertBefore(newTable, lastItem);
        }
    }

    // Mostrar modal
    function showModal() {
        modalComensales.style.display = "block";
    }

    // llamar mesas almacenadas
    loadStoredTables();

    addTableButton.addEventListener("click", addMesa);

});