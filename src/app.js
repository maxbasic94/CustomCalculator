import performMemoryOperation from './memory'
import switchOperation from './cmdDistribution'

const resultInput = document.querySelector('.result');
const archivInput = document.querySelector('.archiv');

document.querySelectorAll('.btn-numb').forEach((numberButton) => numberButton.addEventListener('click', (e) => {
    let number = e.target.value;
    let result = resultInput;
    result.value += number;
  })
)

document.querySelectorAll('.memory').forEach((memoryButton) => memoryButton.addEventListener('click', () => performMemoryOperation(memoryButton)));

document.querySelectorAll('.simpleOperation').forEach((simpleOperationButton) => simpleOperationButton.addEventListener('click', () => {
  if (archivInput.value) {
    let archivString = String(archivInput.value).match(/[\d\.\,]+/g);
    if (archivString.length > 1) {
      archivInput.value = resultInput.value + '+';
      resultInput.value = '';
    } else {
      let firstNumber = Number(archivString[0]);
      let secondNumber = Number(resultInput.value);
      let sign = archivInput.value.slice(-1);
      archivInput.value = switchOperation(sign, firstNumber, secondNumber) + simpleOperationButton.value;
      resultInput.value = '';
    }
  } else {
    let actualNumber = resultInput.value;
    archivInput.value = actualNumber + simpleOperationButton.value;
    resultInput.value = '';
    resultInput.placeholder = '';
  }
}));

document.querySelector('.buttons').addEventListener('click', () => {
  if (resultInput.value === 'division by zero') {
    for (let button of document.querySelectorAll('.btn')) {
      if (button.id !== 'clearButton') { button.setAttribute("disabled", true) }
    }
  } else {
    return;
  }
});

document.querySelector('#numRootButton').addEventListener('click', () => {
  if (!resultInput.value) { return };
  let actualNumber = resultInput.value;
  archivInput.value = actualNumber + '\u221A';
  resultInput.placeholder = '';
  resultInput.value = '';
});

document.querySelector('#numByPowerButton').addEventListener('click', () => {
  if (!resultInput.value) { return };
  let actualNumber = resultInput.value;
  archivInput.value = actualNumber + '^';
  resultInput.value = '';
  resultInput.placeholder = '';
});

document.querySelector('#clearButton').addEventListener('click', () => {
  resultInput.value = '';
  archivInput.value = '';
  resultInput.placeholder = '0';
  for (let button of document.querySelectorAll('.btn')) {
    button.removeAttribute("disabled");
  }
});

document.querySelector('#backspaceButton').addEventListener('click', () => {
  let numberWithoutLastSymbol = resultInput.value.slice(0, -1);
  if (numberWithoutLastSymbol === '') {
    resultInput.value = 0;
  } else {
    resultInput.value = numberWithoutLastSymbol;
  }
});

document.querySelector('#equalButton').addEventListener('click', () => {
  if (!archivInput.value) { return };
  let archivString = String(archivInput.value).match(/[\d\.\,]+/g)
  if (archivString.length === 1) {
    let sign = archivInput.value.slice(-1);
    let firstNumber = Number(archivInput.value.slice(0, -1));
    let secondNumber = Number(resultInput.value);
    let res = switchOperation(sign, firstNumber, secondNumber);
    if (!(sign === '^' && (secondNumber === 2 || secondNumber === 3))) { archivInput.value += secondNumber }
    resultInput.value = res;
  } else {
    return;
  }
});

document.querySelector('#expButton').addEventListener('click', () => { resultInput.value = 2.718281828459045 });
document.querySelector('#oneDivByNumberButton').addEventListener('click', () => { resultInput.value = switchOperation('1/x', 1, resultInput.value) });
document.querySelector('#squareRootButton').addEventListener('click', () => { resultInput.value = switchOperation('√',resultInput.value, 2) });
document.querySelector('#cubeRootButton').addEventListener('click', () => { resultInput.value = switchOperation('√',resultInput.value, 3) });
document.querySelector('#squareButton').addEventListener('click', () => { resultInput.value = switchOperation('^',resultInput.value, 2) });
document.querySelector('#cubeButton').addEventListener('click', () => { resultInput.value = switchOperation('^',resultInput.value, 3) });
document.querySelector('#percentButton').addEventListener('click', () => { resultInput.value = switchOperation('%', 100, resultInput.value) });
document.querySelector('#lnButton').addEventListener('click', () => { resultInput.value = switchOperation('ln', resultInput.value) });
document.querySelector('#logButton').addEventListener('click', () => { resultInput.value = switchOperation('log', resultInput.value) });
document.querySelector('#expByPowerButton').addEventListener('click', () => { resultInput.value = switchOperation('exp', resultInput.value) });