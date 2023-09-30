function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
function backspace() {
    var display = document.getElementById('display');
    var currentValue = display.value;

    // Remove the last character
    display.value = currentValue.substring(0, currentValue.length - 1);
}
