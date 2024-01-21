const value = document.getElementById('value');
const inputUnit = document.getElementById('inputUnit');
const outputUnit = document.getElementById('outputUnit');

function convertUnits() {
    const result = performConversion(inputUnit.value, outputUnit.value, value.value);
    const graphic = getEmoji(outputUnit.value);
    document.getElementById('result').textContent =`Résultat : ${result}`;
    for (let i = 0; i < result; i++)
        document.getElementById('graphic').textContent += `${graphic}`;
}

function getEmoji(outputUnit) {
    if (outputUnit == '330')
        return '🗼';
    else if (outputUnit == '1.756')
        return '🧍🏽‍♂️';
    else if (outputUnit == '56')
        return '🚀';
    else if (outputUnit == '0.1467')
        return '📱';
    else if (outputUnit == '1970')
        return '🌉';
    else if (outputUnit == '1')
        return '👨🏻‍🏫';
    else if (outputUnit == '1000')
        return '🇰🇲';
    else
        return '🇨🇲';

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