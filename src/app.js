import {setSimpleMathOptions, getNumberInPower, getOneDevidedByNumber, getNumberInRoot, performNumByPower,
        performPercentOperation, performNaturalLog, performDecimalLog, performExpByPower,
        performNumRoot, performClearOperation, performBackspaceOperation, setButtonsDisable} from './functions';
import AddCommand from './classes/AddCommand'
import SubCommand from './classes/SubCommand'
import MulCommand from './classes/MulCommand'
import DivCommand from './classes/DivCommand'
import PowCommand from './classes/PowCommand'
import SquareCommand from './classes/SquareCommand'
import Memory from './classes/Memory';



function performEqualOperation() {
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
}

let memory = new Memory('');
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

document.querySelector('.buttons').addEventListener('click', () => setButtonsDisable());
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