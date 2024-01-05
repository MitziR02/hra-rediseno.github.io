document.addEventListener("DOMContentLoaded", function () {

    const btnBack = document.getElementById("back-btn");

    btnBack.addEventListener("click", ()=>{
        window.location.href = 'mesas.html'; 
    });

    // Info mesa 

    const btnInfo = document.getElementById('info-btn');
    const sideMenu = document.getElementById('folio-list');

    btnInfo.addEventListener("click", ()=>{
        sideMenu.style.display = "block";
    });

    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && event.target !== btnInfo) {
            sideMenu.style.display = "none";
        }
    });
});


