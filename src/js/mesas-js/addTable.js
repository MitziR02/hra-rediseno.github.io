document.addEventListener("DOMContentLoaded", function () {
    var tableList = document.getElementById("mesaList");
    var lastItem = document.getElementById("lastItem");
    var modalComensales = document.getElementById("modal-open-table");

    var mesasPorArea = {
        Principal: 8,
        Terraza: 5,
        Salón: 7,
        Barra: 3
    };

    // Agregar mesas dinámicamente
    function loadTables(area) {
        var numeroDeMesas = mesasPorArea[area];

        // Ocultar mesas antes de mostrar el área seleccionada
        hideAllTables();

        for (var i = 1; i <= numeroDeMesas; i++) {
            var mesaId = area.replace(/ /g, '-') + '-table' + i;
            var existingTable = document.getElementById(mesaId);

            if (existingTable) {
                existingTable.style.display = "flex"; // Mostrar la mesa
                existingTable.addEventListener("click", function () {
                    modalComensales.showModal();
                });
            } else {
                var newTable = document.createElement("li");
                newTable.classList.add("table-list-item");
                newTable.id = mesaId;
                newTable.style.display = "flex"; // Mostrar la nueva mesa
                newTable.innerHTML = '<h2 class="table-list-item-title">Mesa ' + i + ' - ' + area + '</h2>' + '<img class="table-list-item-icon" src="./src/assets/icon/iconos-hra-01.svg" alt="table-icon">';

                tableList.insertBefore(newTable, lastItem);

                newTable.addEventListener("click", function () {
                    modalComensales.showModal();
                });
            }
        }
    }

    // Ocultar todas las mesas
    function hideAllTables() {
        var tables = tableList.getElementsByClassName("table-list-item");

        for (var i = 0; i < tables.length; i++) {
            tables[i].style.display = "none";
        }
    }

    // Event listener para el cambio en el select
    var menuArea = document.getElementById("menu-area");

    menuArea.addEventListener("change", function () {
        var area = this.value; // Obtener el valor seleccionado del select
        loadTables(area);
    });

    // Llamar mesas dinámicamente inicialmente para el área principal
    loadTables("Principal");
    
});