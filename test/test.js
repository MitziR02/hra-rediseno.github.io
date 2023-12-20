// Variables para almacenar el PIN y el elemento de salida
let pin = '';
const pinOutput = document.getElementById('pinOutput');

// Función para agregar dígitos al PIN
function addPin(digit) {
    if (pin.length < 4) {
        pin += digit;
        updatePinOutput();
    }
}

// Función para borrar el último dígito del PIN
function clearLast() {
    pin = pin.slice(0, -1);
    updatePinOutput();
}

// Función para borrar todos los dígitos del PIN
function clearAll() {
    pin = '';
    updatePinOutput();
}

// Función para enviar el PIN (puedes adaptarla según tus necesidades)
function submitPin(action) {
    if (pin.length === 4) {
        alert(`PIN ingresado: ${pin}\nAcción: ${action}`);
        // Aquí puedes agregar la lógica de autenticación con el PIN
        // Por ejemplo, puedes enviar el PIN al servidor para la verificación
        // y luego redirigir al usuario si la autenticación es exitosa.
    } else {
        alert('Ingresa un PIN válido antes de presionar ENTRAR.');
    }
}

// Función para actualizar la salida del PIN en la interfaz
function updatePinOutput() {
    const pinItems = Array.from(pinOutput.children);
    pinItems.forEach((item, index) => {
        item.textContent = pin[index] || '';
    });
}