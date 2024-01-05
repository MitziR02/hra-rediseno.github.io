document.addEventListener("DOMContentLoaded", function () {
    const juntarMesasBtn = document.getElementById('juntar-mesas');
    const modalJuntarMesas = document.getElementById('modal-juntar-mesas');
    const btnSubmitMesas = document.getElementById('mesas-confirmar');

    juntarMesasBtn.addEventListener("click", ()=>{
        modalJuntarMesas.showModal();
    });

    btnSubmitMesas.addEventListener("click", ()=>{
        event.preventDefault();
        modalJuntarMesas.close();
    });
});