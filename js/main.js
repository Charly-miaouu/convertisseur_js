const value = document.getElementById('value');
const inputUnit = document.getElementById('inputUnit');
const outputUnit = document.getElementById('outputUnit');

function convertUnits() {
    const result = performConversion(inputUnit.value, outputUnit.value, value.value);
    document.getElementById('result').textContent = `Résultat : ${result}`;
}

function performConversion(inputUnit, outputUnit, value) {
    if (inputUnit === outputUnit) {
        return value;
    }
    return inputUnit * value / outputUnit;
}

function swapUnits() {
    const temp = inputUnit.value;
    inputUnit.value = outputUnit.value;
    outputUnit.value = temp;
}