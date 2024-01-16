function convertUnits() {
    const value = parseFloat(document.getElementById('value').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    const result = performConversion(inputUnit, outputUnit, value);

    document.getElementById('result').textContent = `Résultat : ${result}`;
}

function performConversion(inputUnit, outputUnit, value) {
    if (inputUnit === outputUnit) {
        return value;
    }
    return inputUnit * value / outputUnit;
}

//bouton echanger valeurs