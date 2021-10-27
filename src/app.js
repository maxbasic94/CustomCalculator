function setSimpleMathOptions(operation) {
    let actualNumber = document.querySelector('.result').value;
    document.querySelector('.archiv').value = actualNumber + operation;
    document.querySelector('.result').value = '';
    document.querySelector('.result').placeholder = '';
}

function getNumberInPower(power){
    let actualNumber = Number(document.querySelector(".result").value);
    document.querySelector('.result').value = Math.pow(actualNumber, power);
    document.querySelector('.archiv').value = actualNumber + '^' + power;
}

function getOneDevidedByNumber(){
    let actualNumber = Number(document.querySelector(".result").value);
    document.querySelector(".result").value = Number(1 / actualNumber).toFixed(10);
    document.querySelector('.archiv').value = '1/' + actualNumber;
}

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

for (let numberButton of numberButtons) {
    numberButton.addEventListener('click', function(event) {
        let number = event.target.value;
        let result = document.querySelector('.result');
        result.value += number;
    });
}

squareButton.addEventListener('click', () => getNumberInPower(2));

cubeButton.addEventListener('click', () => getNumberInPower(3));

oneDivByNumberButton.addEventListener('click', () => getOneDevidedByNumber());

expButton.addEventListener('click', () => {
    document.querySelector(".result").value = Math.exp(1);
});

clearButton.addEventListener('click', () => {
    document.querySelector('.result').value = '';
    document.querySelector('.archiv').value = '';
});

backspaceButton.addEventListener('click', () => {
    let numberWithoutLastSymbol = document.querySelector(".result").value.slice(0, -1);
    document.querySelector(".result").value = numberWithoutLastSymbol;
});

addButton.addEventListener('click', (e) => {
    setSimpleMathOptions(e.target.value);
});

subButton.addEventListener('click', (e) => {
    setSimpleMathOptions(e.target.value);
});

mulButton.addEventListener('click', (e) => {
    setSimpleMathOptions(e.currentTarget.value);
});

divButton.addEventListener('click', (e) => {
    setSimpleMathOptions(e.currentTarget.value);
});

equalButton.addEventListener('click', () => {
    if (!document.querySelector('.archiv').value) {return};
    let res;
    let sign = document.querySelector('.archiv').value.slice(-1);
    let firstNumber = Number(document.querySelector('.archiv').value.slice(0, -1));
    let secondNumber = Number(document.querySelector('.result').value);
    if (sign === '+') {
        res = firstNumber + secondNumber;
    }
    if (sign === '-') {
        res = firstNumber - secondNumber;
    }
    if (sign === '*') {
        res = firstNumber * secondNumber;
    }
    if (sign === '/') {
        res = firstNumber / secondNumber;
    }
    document.querySelector('.result').value = res;
});
