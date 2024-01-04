document.addEventListener("DOMContentLoaded", function () {
    var toggleBtn = document.getElementById("toggleBtn");
    var dropdownMenu = document.getElementById("dropdownMenu");
    var burguerMenuBtn = document.getElementById("burguer-menu");
    var burguerMenu = document.getElementById("secondary-menu");

    toggleBtn.addEventListener("click", function () {
        dropdownMenu.style.display = (window.innerWidth <= 990) ? (dropdownMenu.style.display === "block") ? "none" : "block" : "block";
    });

    burguerMenuBtn.addEventListener("click", function () {
        burguerMenu.style.display = (window.innerWidth <= 990) ? (burguerMenu.style.display === "block") ? "none" : "block" : "block";
    });

    // Cerrar menús
    document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target) && event.target !== toggleBtn) {
            dropdownMenu.style.display = "none";
        }
    
        if (!burguerMenu.contains(event.target) && event.target !== burguerMenuBtn && window.innerWidth <= 990) {
            burguerMenu.style.display = "none";
        }
    });
    

    // Visibilidad menu segun tamaño
    window.addEventListener("resize", function () {
        if (window.innerWidth > 990) {
            burguerMenuBtn.style.display = "none";
            burguerMenu.style.display = "block";
        }
        else{
            burguerMenuBtn.style.display = "block";
            burguerMenu.style.display = "none";
        }
    });

    // Mostrar texto de btn principal
    var areaPrincipalBtn = document.getElementById("areaPrincipalBtn");
    var terrazaBtn = document.getElementById("terrazaBtn");
    var salonBtn = document.getElementById("salonBtn");
    var barraBtn = document.getElementById("barraBtn");

    areaPrincipalBtn.addEventListener("click", function () {
        updateButtonText("ÁREA PRINCIPAL");
    });

    terrazaBtn.addEventListener("click", function () {
        updateButtonText("TERRAZA");
    });

    salonBtn.addEventListener("click", function () {
        updateButtonText("SALÓN");
    });

    barraBtn.addEventListener("click", function () {
        updateButtonText("BARRA");
    });

    // Funcion actualizar texto
    function updateButtonText(text) {
        toggleBtn.innerHTML = text + " " + ' <img class="icon-drop" src="./src/assets/icon/RiArrowDownSLine.svg" alt="icon-menu">';
    }
    
});
