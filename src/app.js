import switchOperation from './cmdDistribution'
import Calc from './commands/Calc';
import Memory from './commands/Memory'

const resultInput = document.querySelector('.result');
const archivInput = document.querySelector('.archiv');
const calc = new Calc(resultInput, archivInput);
let memory = new Memory('');

document.querySelector('.buttons').addEventListener('click', (e) => {
  if (resultInput.value === 'division by zero') {
    for (let button of document.querySelectorAll('.btn')) {
      if (button.id !== 'clearButton') { button.setAttribute("disabled", true) }
    }
  } else {
    return;
  }
});

document.querySelectorAll('.btn').forEach((btn) => btn.addEventListener('click', (e) => {
  switch (e.currentTarget.id) {
    case 'expButton':
      calc.render(new (switchOperation(e.currentTarget.value))().execute());
      break;
    case 'oneDivByNumberButton':
      calc.render(new (switchOperation(e.currentTarget.value))(1, resultInput.value).execute());
      break;
    case 'squareRootButton':
      calc.render(new (switchOperation(e.currentTarget.value))(resultInput.value, 2).execute());
      break;
    case 'cubeRootButton':
      calc.render(new (switchOperation(e.currentTarget.value))(resultInput.value, 3).execute());
      break;
    case 'squareButton':
      calc.render(new (switchOperation(e.currentTarget.value))(resultInput.value, 2).execute());
      break;
    case 'cubeButton':
      calc.render(new (switchOperation(e.currentTarget.value))(resultInput.value, 3).execute());
      break;
    case 'percentButton':
      calc.render(new (switchOperation(e.currentTarget.value))(100, resultInput.value).execute());
      break;
    case 'lnButton':
      calc.render(new (switchOperation(e.currentTarget.value))(resultInput.value).execute());
      break;
    case 'logButton':
      calc.render(new (switchOperation(e.currentTarget.value))(resultInput.value).execute());
      break;
    case 'expByPowerButton':
      calc.render(new (switchOperation(e.currentTarget.value))(resultInput.value).execute());
      break;
    case 'number0':
    case 'number1':
    case 'number2':
    case 'number3':
    case 'number4':
    case 'number5':
    case 'number6':
    case 'number7':
    case 'number8':
    case 'number9':
      calc.addNumber(e.target.value);
      break;
    case 'divButton':
    case 'mulButton':
    case 'subButton':
    case 'addButton':
      if (archivInput.value) {
        let archivString = String(archivInput.value).match(/[\d\.\,]+/g);
        if (archivString.length > 1) {
          calc.render('', resultInput.value + '+');
        } else {
          let firstNumber = Number(archivString[0]);
          let secondNumber = Number(resultInput.value);
          let sign = archivInput.value.slice(-1);
          calc.render('', new (switchOperation(sign))(firstNumber, secondNumber).execute() + e.currentTarget.value);
        }
      } else {
        let actualNumber = resultInput.value;
        calc.render('', actualNumber + e.currentTarget.value, '');
      }
      break;
    case 'numRootButton':
      if (!resultInput.value) { return };
      let actualRootNumber = resultInput.value;
      calc.render('', actualRootNumber + '\u221A', '');
      break;
    case 'numByPowerButton':
      if (!resultInput.value) { return };
      let actualPowerNumber = resultInput.value;
      calc.render('', actualPowerNumber + '^', '');
      break;
    case 'clearButton':
      calc.render('', '', '0');
      for (let button of document.querySelectorAll('.btn')) {
        button.removeAttribute("disabled");
      }
      break;
    case 'backspaceButton':
      let numberWithoutLastSymbol = resultInput.value.slice(0, -1);
      if (numberWithoutLastSymbol === '') {
        calc.render(0);
      } else {
        calc.render(numberWithoutLastSymbol);
      }
      break;
    case 'equalButton':
      if (!archivInput.value) { return };
      let archivString = String(archivInput.value).match(/[\d\.\,]+/g)
      if (archivString.length === 1) {
        let sign = archivInput.value.slice(-1);
        let firstNumber = Number(archivInput.value.slice(0, -1));
        let secondNumber = Number(resultInput.value);
        let res = new (switchOperation(sign))(firstNumber, secondNumber).execute();
        if (!(sign === '^' && (secondNumber === 2 || secondNumber === 3))) { archivInput.value += secondNumber }
        calc.render(res);
      } else {
        return;
      }
      break;
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
      calc.render(memory.read())
      break;
    default:
      break;
  }
}));