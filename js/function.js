function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id) {
    document.getElementById('section-donation').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function changeColorById(id) {
    document.getElementById('button-donation').classList.add('btn-outline');
    document.getElementById('button-history').classList.add('btn-outline');
    document.getElementById(id).classList.remove('btn-outline');
}

