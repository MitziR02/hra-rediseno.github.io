// Variables pin
let pin = '';
const correctPin = '1234';

document.querySelectorAll('.keypad-item').forEach(item => {
    item.addEventListener('click', function() {
        const value = this.innerText;
        
        //keypad
        if (value === 'C') {
            pin = '';
        } else if (value === '⬅') {
            pin = pin.slice(0, -1);
        } else {
            pin += value;
        }
        
        // Auto validar
        document.querySelectorAll('.output-item').forEach((item, index) => {
            item.innerText = index < pin.length ? '*' : '';
        });
        
        if (pin.length === 4) {
            setTimeout(() => {
                if (pin === correctPin) {
                    pin = '';
                    window.location.href = "./mesas.html";
                } else {
                    alert("PIN incorrecto. Inténtalo de nuevo.");
                    pin = '';
                    document.querySelectorAll('.output-item').forEach(item => {
                        item.innerText = '';
                    });
                }
            }, 0);
        }
    });
});

// Validar con btn
function enterButtonClick() {
    if (pin === correctPin) {
        window.location.href = "./mesas.html";
    } else {
        pin = '';
        alert("PIN incorrecto. Inténtalo de nuevo.");
        document.querySelectorAll('.output-item').forEach(item => {
            item.innerText = '';
        });
    }
}

var enterButton = document.querySelector(".btn");
enterButton.addEventListener("click", enterButtonClick);
