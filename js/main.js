const value = document.getElementById('value');
const inputUnit = document.getElementById('inputUnit');
const outputUnit = document.getElementById('outputUnit');
document.getElementById('value').focus();

function convertUnits() {
    const result = performConversion(inputUnit.value, outputUnit.value, value.value);
    const graphic = getEmoji(outputUnit.value);
    document.getElementById('result').textContent =`Résultat : ${result}`;
    document.getElementById('graphic').textContent = ``;
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
    else if (outputUnit == '9.14')
        return '🤖';
    else if (outputUnit == '0.3048')
        return '🦶🏻';
    else if (outputUnit == '0.65')
        return '🥖';
    else if (outputUnit == '46.05')
        return '🗽';
    else
        return '🇨🇲';

}

function performConversion(inputUnit, outputUnit, value) {
    let result = 0;
    if (inputUnit === outputUnit) {
        result = value;
        return result;
    } else {
        result = inputUnit * value / outputUnit
        return result.toFixed(2);
    }
}

function swapUnits() {
    const temp = inputUnit.value;
    inputUnit.value = outputUnit.value;
    outputUnit.value = temp;
}