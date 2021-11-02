function setSimpleMathOptions(operation) {
    let actualNumber = resultInput.value;
    archivInput.value = actualNumber + operation;
    resultInput.value = '';
    resultInput.placeholder = '';
}

function getNumberInPower(power) {
    let actualNumber = Number(resultInput.value);
    archivInput.value = actualNumber + '^' + power;
    return Math.pow(actualNumber, power);
}

function getOneDevidedByNumber() {
    if (!resultInput.value) {return ''};
    let actualNumber = Number(resultInput.value);
    archivInput.value = '1/' + actualNumber;
    if (actualNumber === 0) {
        return 'division by zero';
    } else {
        return Number(1 / actualNumber);
    }
}

function getNumberInRoot(power) {
    if (!resultInput.value) {return ''}; 
    let actualNumber = Number(resultInput.value);
    if (power <= 2) {
        archivInput.value = '\u221A' + actualNumber;
    } else {
        archivInput.value = power + '\u221A' + actualNumber;
    }
    return Math.pow(actualNumber, 1 / power);
}

function performNumByPower() {
    if (!resultInput.value) {return};
    let actualNumber = resultInput.value;
    archivInput.value = actualNumber + '^';
    resultInput.value = '';
    resultInput.placeholder = '';
}

function performPercentOperation() {
    if (!resultInput.value) {return ''};
    let actualNumber =Number(resultInput.value);
    archivInput.value = actualNumber + '%';
    return actualNumber / 100;
}

function performNaturalLog() {
    if (!resultInput.value || resultInput.value === 'ln by zero') {return ''};
    let actualNumber = resultInput.value;
    document.querySelector(".archiv").value = 'ln(' + actualNumber + ')';
    if (actualNumber === '0') {
        return 'ln by zero';
    } else {
        return Math.log(actualNumber);
    }
}

function performDecimalLog() {
    if (!resultInput.value || resultInput.value === 'log by zero') {return ''};
    let actualNumber = resultInput.value;
    document.querySelector(".archiv").value = 'log10(' + actualNumber + ')';
    if (actualNumber === '0') {
        return 'log by zero';
    } else {
        return Math.log10(actualNumber);
    }
}

function performExpByPower() {
    if (!resultInput.value) {return ''};
    let actualNumber = resultInput.value;
    document.querySelector(".archiv").value = 'exp(' + actualNumber + ')';
    return Math.exp(actualNumber);
}

function performNumRoot() {
    if (!resultInput.value) {return};
    let actualNumber = resultInput.value;
    archivInput.value = actualNumber + '\u221A';
    resultInput.placeholder = '';
    resultInput.value = '';
}

function performClearOperation() {
    resultInput.value = '';
    archivInput.value = '';
    resultInput.placeholder = '0';
    for (let button of allButtons) {
        button.removeAttribute("disabled");
    }
}

function performBackspaceOperation() {
    let numberWithoutLastSymbol = resultInput.value.slice(0, -1);
    resultInput.value = numberWithoutLastSymbol;
}

function setButtonsDisable() {
    if (resultInput.value === 'division by zero') {
        for (let button of allButtons) {
        if(button.id !== 'clearButton') {button.setAttribute("disabled", true)}
        }
    } else {
        return;
    }
}

const resultInput = document.querySelector('.result');
const archivInput = document.querySelector('.archiv');
const allButtons = document.querySelectorAll('.btn');

module.exports = {
    setSimpleMathOptions, getNumberInPower, getOneDevidedByNumber, getNumberInRoot, performNumByPower,
    performPercentOperation, performNaturalLog, performDecimalLog, performExpByPower,
    performNumRoot, performClearOperation, performBackspaceOperation, setButtonsDisable
};