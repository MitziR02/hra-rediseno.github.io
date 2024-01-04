document.addEventListener("DOMContentLoaded", function () {
    var tableList = document.getElementById("mesaList");
    var lastItem = document.getElementById("lastItem");
    var modalComensales = document.getElementById("modal-num-comensales");

    var mesasPorArea = {
        "Area Principal": 8,
        Terraza: 5,
        Salón: 7,
        Barra: 3
    };

    // Agregar mesas dinámicamente
    function loadTables(area) {
        var numeroDeMesas = mesasPorArea[area];

        // Ocultar mesas antes de mostrar area seleccionada
        hideAllTables();

        for (var i = 1; i <= numeroDeMesas; i++) {
            var mesaId = area.replace(/ /g, '-') + '-table' + i;
            var existingTable = document.getElementById(mesaId);

            if (existingTable) {
                existingTable.style.display = "flex"; // Mostrar la mesa
                existingTable.addEventListener("click", function () {
                    showModal();
                });
            } else {
                var newTable = document.createElement("li");
                newTable.classList.add("table-list-item");
                newTable.id = mesaId;
                newTable.style.display = "flex"; // Mostrar la nueva mesa
                newTable.innerHTML = '<h2 class="table-list-item-title">Mesa ' + i + ' - ' + area + '</h2>' +
                    '<img class="table-list-item-icon" src="./src/assets/icon/iconos-hra-01.svg" alt="table-icon">';

                tableList.insertBefore(newTable, lastItem);

                newTable.addEventListener("click", function () {
                    showModal();
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

    // Mostrar modal
    function showModal() {
        modalComensales.style.display = "block";

        var myIframe = document.getElementById('frame-open-table');
        var doc = myIframe.contentDocument || myIframe.contentWindow.document;

        var confirmar = doc.getElementById("btnCerrarModal");

        confirmar.addEventListener("click", function () {
            hideModal();
        });
    }

    function hideModal() {
        console.log("btn oprimido");
        modalComensales.style.display = "none";

        window.location.href = 'mesa-abierta.html';
    }

    // Event listener para los botones del menú principal
    var areaPrincipalBtn = document.getElementById("areaPrincipalBtn");
    var terrazaBtn = document.getElementById("terrazaBtn");
    var salonBtn = document.getElementById("salonBtn");
    var barraBtn = document.getElementById("barraBtn");

    areaPrincipalBtn.addEventListener("click", function () {
        loadTables("Area Principal");
    });

    terrazaBtn.addEventListener("click", function () {
        loadTables("Terraza");
    });

    salonBtn.addEventListener("click", function () {
        loadTables("Salón");
    });

    barraBtn.addEventListener("click", function () {
        loadTables("Barra");
    });

    // Llamar mesas dinámicamente inicialmente para el área principal
    loadTables("Area Principal");
});
