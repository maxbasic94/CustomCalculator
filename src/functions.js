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

function performBackspaceOperation() {
    let numberWithoutLastSymbol = resultInput.value.slice(0, -1);
    resultInput.value = numberWithoutLastSymbol;
}

const resultInput = document.querySelector('.result');
const archivInput = document.querySelector('.archiv');
const allButtons = document.querySelectorAll('.btn');

module.exports = {
    getOneDevidedByNumber, performNumByPower,
    performPercentOperation, performNaturalLog, performDecimalLog, performExpByPower,
    performNumRoot, performClearOperation, performBackspaceOperation
};