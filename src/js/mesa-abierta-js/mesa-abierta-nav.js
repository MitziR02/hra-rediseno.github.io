document.addEventListener("DOMContentLoaded", function () {

    const btnBack = document.getElementById("back-btn");

    btnBack.addEventListener("click", ()=>{
        window.location.href = 'mesas.html'; 
    });

    // menus desplegables

    const btnInfo = document.getElementById('info-btn');
    const sideMenu = document.getElementById('folio-list');
    const btnMenu = document.getElementById('menu-icon');
    const sideMenuNav = document.getElementById('main-btns-container');
    const contBurguer = document.getElementById('container-burguer');

    btnInfo.addEventListener("click", () => {
        sideMenu.style.display = "block";
    });

    btnMenu.addEventListener("click", () => {
        sideMenuNav.style.display = "flex";
    });

    document.addEventListener("click", function (event) {
        if (window.innerWidth <= 700) {
            if (!sideMenu.contains(event.target) && event.target !== btnInfo) {
                sideMenu.style.display = "none";
            }
        }
        if (window.innerWidth <= 450) {
            if (!sideMenuNav.contains(event.target) && event.target !== btnMenu) {
                sideMenuNav.style.display = "none";
            }
        }
    });
    
    
    window.addEventListener("resize", function () {
        if (window.innerWidth > 700) {
            btnInfo.style.display = "none";
            sideMenu.style.display = "block";
        } else if (window.innerWidth <= 700 && window.innerWidth > 450) {
            btnInfo.style.display = "flex";
            sideMenu.style.display = "none";
            contBurguer.style.display = "none";
            sideMenuNav.style.display = "flex";
        } else {
            btnInfo.style.display = "flex";
            contBurguer.style.display = "flex";
            sideMenu.style.display = "none";
            sideMenuNav.style.display = "none";
        }
    });

    
    
      

});


