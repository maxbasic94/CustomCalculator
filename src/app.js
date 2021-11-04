import AddCommand from './commands/AddCommand'
import SubCommand from './commands/SubCommand'
import MulCommand from './commands/MulCommand'
import DivCommand from './commands/DivCommand'
import PowCommand from './commands/PowCommand'
import SquareCommand from './commands/SquareCommand'
import Memory from './commands/Memory';
import OneDivByNumCommand from './commands/OneDivByNumCommand'
import PercentCommand from './commands/PercentCommand'
import LnCommand from './commands/LnCommand'
import LogCommand from './commands/LogCommand'
import ExpByPowerCommand from './commands/ExpByPowerCommand'

let memory = new Memory('');
const resultInput = document.querySelector('.result');
const archivInput = document.querySelector('.archiv');
const numberButtons = document.querySelectorAll('.btn-numb');
const clearButton = document.querySelector('#clearButton');
const simpleOperationButtons = document.querySelectorAll('.simpleOperation');
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
const allButtons = document.querySelectorAll('.btn');

for (let numberButton of numberButtons) {
  numberButton.addEventListener('click', (e) => {
    let number = e.target.value;
    let result = resultInput;
    result.value += number;
  });
}

for (let memoryButton of memoryButtons) {
  memoryButton.addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'memoryClearButton':
        memory.clear();
        break;
      case 'memoryAddButton':
        memory.writeAdd(resultInput.value)
        break;
      case 'memoryDivButton':
        memory.writeSub(resultInput.value)
        break;
      case 'memoryReadButton':
        resultInput.value = memory.read()
        break;
      default:
        break;
    }
  });
}

for (let simpleOperationButton of simpleOperationButtons) {
  simpleOperationButton.addEventListener('click', (e) => {
    if (archivInput.value) {
      let archivString = String(archivInput.value).match(/[\d\.\,]+/g);
      if(archivString.length > 1) {
        archivInput.value = resultInput.value + '+';
        resultInput.value = '';
      } else {
        let firstNumber = Number(archivString[0]);
        let secondNumber = Number(resultInput.value);
        let sign = archivInput.value.slice(-1);
        switch (sign) {
          case '+':
            archivInput.value = new AddCommand(firstNumber, secondNumber).execute();
            break;
          case '-':
            archivInput.value = new SubCommand(firstNumber, secondNumber).execute();
            break;
          case '*':
            archivInput.value = new MulCommand(firstNumber, secondNumber).execute();
            break;
          case '/':
            archivInput.value = new DivCommand(firstNumber, secondNumber).execute();
            break;
          case '^':
            archivInput.value = new PowCommand(firstNumber, secondNumber).execute();
            break;
          case '√':
            archivInput.value = new SquareCommand(firstNumber, secondNumber).execute();
            break;
          default:
              return;
        }
        resultInput.value = '';
        archivInput.value += simpleOperationButton.value;
      }
    } else {
      let actualNumber = resultInput.value;
      archivInput.value = actualNumber + simpleOperationButton.value;
      resultInput.value = '';
      resultInput.placeholder = '';
    }
  })
}
 
document.querySelector('.buttons').addEventListener('click', () => {
  if (resultInput.value === 'division by zero') {
    for (let button of allButtons) {
      if(button.id !== 'clearButton') {button.setAttribute("disabled", true)}
    }
  } else {
    return;
  }
});

numRootButton.addEventListener('click', () => {
  if (!resultInput.value) {return};
    let actualNumber = resultInput.value;
    archivInput.value = actualNumber + '\u221A';
    resultInput.placeholder = '';
    resultInput.value = '';
});

numByPowerButton.addEventListener('click', () => {
  if (!resultInput.value) {return};
    let actualNumber = resultInput.value;
    archivInput.value = actualNumber + '^';
    resultInput.value = '';
    resultInput.placeholder = '';
});

clearButton.addEventListener('click', () => {
  resultInput.value = '';
  archivInput.value = '';
  resultInput.placeholder = '0';
  for (let button of allButtons) {
    button.removeAttribute("disabled");
  }
});

backspaceButton.addEventListener('click', () => {
  let numberWithoutLastSymbol = resultInput.value.slice(0, -1);
  resultInput.value = numberWithoutLastSymbol;
});

equalButton.addEventListener('click', () => {
  let res;
  if (!archivInput.value) {return};
  let sign = archivInput.value.slice(-1);
  let firstNumber = Number(archivInput.value.slice(0, -1));
  let secondNumber = Number(resultInput.value);
  switch (sign) {
      case '+':
          res = new AddCommand(firstNumber, secondNumber).execute();
        break;
      case '-':
          res = new SubCommand(firstNumber, secondNumber).execute();
        break;
      case '*':
          res = new MulCommand(firstNumber, secondNumber).execute();
        break;
      case '/':
          res = new DivCommand(firstNumber, secondNumber).execute();
        break;
      case '^':
          res = new PowCommand(firstNumber, secondNumber).execute();
        break;
      case '√':
          res = new SquareCommand(firstNumber, secondNumber).execute();
        break;
      default:
          return;
  }
  archivInput.value += secondNumber;
  resultInput.value = res;
});

expButton.addEventListener('click', () => {resultInput.value = 2.718281828459045});

oneDivByNumberButton.addEventListener('click', () => {resultInput.value = new OneDivByNumCommand(resultInput.value).execute()});
squareRootButton.addEventListener('click', () => {resultInput.value = new SquareCommand(resultInput.value, 2).execute()});
cubeRootButton.addEventListener('click', () => {resultInput.value = new SquareCommand(resultInput.value, 3).execute()});
squareButton.addEventListener('click', () => {resultInput.value = new PowCommand(resultInput.value, 2).execute()});
cubeButton.addEventListener('click', () => {resultInput.value = new PowCommand(resultInput.value, 3).execute()});
percentButton.addEventListener('click', () => {resultInput.value = new PercentCommand(resultInput.value).execute()});
lnButton.addEventListener('click', () => {resultInput.value = new LnCommand(resultInput.value).execute()});
logButton.addEventListener('click', () => {resultInput.value = new LogCommand(resultInput.value).execute()});
expByPowerButton.addEventListener('click', () => {resultInput.value = new ExpByPowerCommand(resultInput.value).execute()});