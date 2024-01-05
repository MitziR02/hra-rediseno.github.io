const btnInfo = document.getElementById('info-btn');
    const sideMenu = document.getElementById('folio-list');
    
    btnInfo.addEventListener("click", () => {
        sideMenu.style.display = "block";
    });
    
    document.addEventListener("click", function (event) {
        if (window.innerWidth <= 700) {
            if (!sideMenu.contains(event.target) && event.target !== btnInfo) {
                sideMenu.style.display = "none";
            }
        }
    });
    
    window.addEventListener("resize", function () {
        if (window.innerWidth > 700) {
            btnInfo.style.display = "none";
            sideMenu.style.display = "block";
        } else {
            btnInfo.style.display = "flex";
            sideMenu.style.display = "none";
        }
    });

      // Menu Hamburguesa

    const btnMenu = document.getElementById('menu-icon');
    const sideMenuNav = document.getElementById('main-btns-container');
    const contBurguer = document.getElementById('container-burguer');
    
    btnMenu.addEventListener("click", () => {
        sideMenuNav.style.display = "flex";
    });
    
    document.addEventListener("click", function (event) {
        if (window.innerWidth <= 450) {
            if (!sideMenuNav.contains(event.target) && event.target !== btnMenu) {
                sideMenuNav.style.display = "none";
            }
        }
    });
    
    window.addEventListener("resize", function () {
        if (window.innerWidth > 450) {
            contBurguer.style.display = "none";
            sideMenu.style.display = "flex";
        } else {
            btnMenu.style.display = "flex";
            contBurguer.style.display = "none";
        }
    });