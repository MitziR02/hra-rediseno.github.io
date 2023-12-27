document.addEventListener("DOMContentLoaded", function () {
    var mesaList = document.getElementById("mesaList");
    var addTableButton = document.getElementById("addTable");
    var lastItem =document.getElementById("lastItem");

    var mesaCounter = 1;

    function addMesa() {
        var newMesa = document.createElement("li");
        newMesa.classList.add("table-list__item");
        newMesa.innerHTML = '<h2 class="table-list__item__title">Mesa ' + mesaCounter + '</h2>' +
            '<img class="table-list__item__icon" src="./src/assets/icon/iconos-hra-01.svg" alt="table-icon">';
        mesaList.insertBefore(newMesa, lastItem); 
        mesaCounter++;
    }

    // Agregar un event listener al botón "Agregar mesa"
    addTableButton.addEventListener("click", addMesa);
});
