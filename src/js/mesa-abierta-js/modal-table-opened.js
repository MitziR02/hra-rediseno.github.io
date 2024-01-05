document.addEventListener("DOMContentLoaded", function () {
    const btnDividirCuenta = document.getElementById('btn-div-cuenta');
    const modalDividirCuenta = document.getElementById('modal-dividir-cuenta');
    const btnSubmitDividir = document.getElementById('dividir-confirmar');

    btnDividirCuenta.addEventListener("click", ()=>{
        modalDividirCuenta.showModal();
    });

    btnSubmitDividir.addEventListener("click", ()=>{
        event.preventDefault();
        modalDividirCuenta.close();
    });

    const btnActualizarCom = document.getElementById('btn-act-comen');
    const modalComensales = document.getElementById('modal-act-comen');
    const btnSubmitComensales = document.getElementById('comensales-confir');

    btnActualizarCom.addEventListener("click", ()=>{
        modalComensales.showModal();
    });

    btnSubmitComensales.addEventListener("click", ()=>{
        event.preventDefault();
        modalComensales.close();
    });

});

