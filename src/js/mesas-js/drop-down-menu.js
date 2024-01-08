document.addEventListener("DOMContentLoaded", function () {
    var burguerMenuBtn = document.getElementById("burguer-menu");
    var burguerMenu = document.getElementById("secondary-menu");

    burguerMenuBtn.addEventListener("click", function () {
        burguerMenu.style.display = (window.innerWidth <= 990) ? (burguerMenu.style.display === "block") ? "none" : "block" : "block";
    });

    // Cerrar menús
    document.addEventListener("click", function (event) {
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
    
});
