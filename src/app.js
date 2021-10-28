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
}

function performBackspaceOperation() {
    let numberWithoutLastSymbol = resultInput.value.slice(0, -1);
    resultInput.value = numberWithoutLastSymbol;
}

function getSum(num1, num2) {
    return num1 + num2;
}

function getSub(num1, num2) {
    return num1 - num2;
}

function getMul(num1, num2) {
    return num1 * num2;
}

function getDiv(num1, num2) {
    if (secondNumber === 0) {
        return 'division by zero';
    } else {
        return num1 / num2;
    }
}

function getPow(num, pow) {
    return Math.pow(num, pow);
}

function getSquare(num, pow) {
    return Math.pow(num, 1 / pow);
}

function performEqualOperation() {
    let res;
    if (!archivInput.value) {return};
    let sign = archivInput.value.slice(-1);
    let firstNumber = Number(archivInput.value.slice(0, -1));
    let secondNumber = Number(resultInput.value);
    switch (sign) {
        case '+':
            res = getSum(firstNumber, secondNumber);
          break;
        case '-':
            res = getSub(firstNumber, secondNumber);
          break;
        case '*':
            res = getMul(firstNumber, secondNumber);
          break;
        case '/':
            res = getDiv(firstNumber, secondNumber);
          break;
        case '^':
            res = getPow(firstNumber, secondNumber);
          break;
        case '√':
            res = getSquare(firstNumber, secondNumber);
          break;
        default:
            return;
    }
    archivInput.value += secondNumber;
    resultInput.value = res;
}

function performMemoryOptions(memoryButton) {
    switch (memoryButton) {
        case 'memoryClearButton':
            memory = '';
          break;
        case 'memoryReadButton':
            if (memory) {
                resultInput.value = memory;
            }
          break;
        case 'memoryDivButton':
            if(resultInput.value) {
                memory -= resultInput.value;
            }
          break;
        case 'memoryAddButton':
            if(resultInput.value) {
                memory += resultInput.value;
            }
          break;
        default:
            return;
    }
}

let memory = '';
const resultInput = document.querySelector('.result');
const archivInput = document.querySelector('.archiv');
const numberButtons = document.querySelectorAll('.btn-numb');
const clearButton = document.querySelector('#clearButton');
const addButton = document.querySelector('#addButton');
const subButton = document.querySelector('#subButton');
const mulButton = document.querySelector('#mulButton');
const divButton = document.querySelector('#divButton');
const equalButton = document.querySelector('#equalButton');
const backspaceButton = document.querySelector('#backspaceButton');
const squareButton = document.querySelector('#squareButton');
const cubeButton = document.querySelector('#cubeButton');
const oneDivByNumberButton = document.querySelector('#oneDivByNumberButton');
const expButton = document.querySelector('#expButton');
const percentButton = document.querySelector('#percentButton');
const squareRootButton = document.querySelector('#squareRootButton');
const cubeRootButton = document.querySelector('#cubeRootButton');
const numRootButton = document.querySelector('#numRootButton');
const expByPowerButton = document.querySelector('#expByPowerButton');
const lnButton = document.querySelector('#lnButton');
const logButton = document.querySelector('#logButton');
const memoryButtons = document.querySelectorAll('.memory');
const numByPowerButton = document.querySelector('#numByPowerButton');

for (let numberButton of numberButtons) {
    numberButton.addEventListener('click', function(event) {
        let number = event.target.value;
        let result = resultInput;
        result.value += number;
    });
}

for (let memoryButton of memoryButtons) {
    memoryButton.addEventListener('click', (e) => performMemoryOptions(e.target.id));
}

lnButton.addEventListener('click', () => {resultInput.value = performNaturalLog()});
logButton.addEventListener('click', () => {resultInput.value = performDecimalLog()});
expByPowerButton.addEventListener('click', () => {resultInput.value = performExpByPower()});
squareRootButton.addEventListener('click', () => {resultInput.value = getNumberInRoot(2)});
cubeRootButton.addEventListener('click', () => {resultInput.value = getNumberInRoot(3)});
numRootButton.addEventListener('click', performNumRoot);
numByPowerButton.addEventListener('click', performNumByPower);
percentButton.addEventListener('click', () => {resultInput.value = performPercentOperation()});
squareButton.addEventListener('click', () => {resultInput.value = getNumberInPower(2)});
cubeButton.addEventListener('click', () => {resultInput.value = getNumberInPower(3)});
oneDivByNumberButton.addEventListener('click', () => {resultInput.value = getOneDevidedByNumber()});
expButton.addEventListener('click', () => {resultInput.value = Math.exp(1)});
clearButton.addEventListener('click', performClearOperation);
backspaceButton.addEventListener('click', performBackspaceOperation);
addButton.addEventListener('click', (e) => {setSimpleMathOptions(e.target.value)});
subButton.addEventListener('click', (e) => {setSimpleMathOptions(e.target.value)});
mulButton.addEventListener('click', (e) => {setSimpleMathOptions(e.currentTarget.value)});
divButton.addEventListener('click', (e) => {setSimpleMathOptions(e.currentTarget.value)});
equalButton.addEventListener('click', performEqualOperation);

module.exports = sum;