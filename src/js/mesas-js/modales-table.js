document.addEventListener("DOMContentLoaded", function () {
    const juntarMesasBtn = document.getElementById('juntar-mesas');
    const modalJuntarMesas = document.getElementById('modal-juntar-mesas');
    const btnSubmitMesas = document.getElementById('juntar-confirmar');
    const btnCloseMesas = document.getElementById('close-modal-mesas');

    juntarMesasBtn.addEventListener("click", ()=>{
        modalJuntarMesas.showModal();
    });

    btnSubmitMesas.addEventListener("click", ()=>{
        event.preventDefault();
        modalJuntarMesas.close();
    });

    btnCloseMesas.addEventListener("click", ()=>{
        modalJuntarMesas.close();
    });


    const btnCambiarMesas = document.getElementById('cambiar-mesas');
    const modalCambiarMesas = document.getElementById('modal-cambiar-mesa');
    const btnSubmitCambiar = document.getElementById ('cambiar-confirmar');
    const btnCloseCambiar = document.getElementById('close-modal-cambiar');

    btnCambiarMesas.addEventListener("click", ()=>{
        modalCambiarMesas.showModal();
    })

    btnSubmitCambiar.addEventListener("click", ()=>{
        event.preventDefault();
        modalCambiarMesas.close();
    });

    btnCloseCambiar.addEventListener("click", ()=>{
        modalCambiarMesas.close();
    });

    const btnCambiarMesero = document.getElementById('cambiar-mesero');
    const modalCambiarMesero = document.getElementById('modal-cambiar-mesero');
    const btnSubmitMesero = document.getElementById ('mesero-confirmar');
    const btnCloseMesero = document.getElementById('close-modal-mesero');

    btnCambiarMesero.addEventListener("click", ()=>{
        modalCambiarMesero.showModal();
    })

    btnSubmitMesero.addEventListener("click", ()=>{
        event.preventDefault();
        modalCambiarMesero.close();
    });

    btnCloseMesero.addEventListener("click", ()=>{
        modalCambiarMesero.close();
    });
});