import switchOperation from './cmdDistribution'
import Calc from './commands/Calc';
import Memory from './commands/Memory'

const resultInput = document.querySelector('.result');
const archivInput = document.querySelector('.archiv');
const calc = new Calc(resultInput, archivInput);
const memory = new Memory('');

document.querySelector('.buttons').addEventListener('click', () => {
  if (resultInput.value === 'division by zero') {
    document.querySelectorAll('.btn').forEach((button) => {
      if (button.id !== 'clearButton') { button.setAttribute("disabled", true) }
    }) 
  } 
});

document.querySelectorAll('.btn').forEach((btn) => btn.addEventListener('click', (e) => {
  if(e.currentTarget.classList.contains('btn-numb')) calc.addNumber(e.target.value);

  if(e.currentTarget.classList.contains('simpleOperation')) {
    if (archivInput.value) {
      const archivString = String(archivInput.value).match(/[\d\.\,]+/g);
      if (archivString.length > 1) {
        calc.render('', resultInput.value + e.currentTarget.value);
      } else {
        const [firstNumber, sign, secondNumber] = calc.getSignAndValues();
        calc.render('', new (switchOperation(sign))(firstNumber, secondNumber).execute() + e.currentTarget.value);
      }
    } else {
    const actualNumber = resultInput.value;
    calc.render('', actualNumber + e.currentTarget.value, '');
    }
  }

  if(e.currentTarget.classList.contains('root-pow')) {
    if (!resultInput.value) return;
    calc.render('', resultInput.value + `${e.currentTarget.value}`, '');
  }

  if(e.currentTarget.classList.contains('hardOper')) {
    if (e.currentTarget.hasAttribute('pow')) {
      const pow = e.currentTarget.getAttribute('pow');
      calc.render(new (switchOperation(e.currentTarget.value))(resultInput.value, pow).execute());
    } else {
      calc.render(new (switchOperation(e.currentTarget.value))(resultInput.value).execute());
    }
  }

  if(e.currentTarget.classList.contains('clear')) {
    calc.render('', '', '0');
    document.querySelectorAll('.btn').forEach((button) => {
      button.removeAttribute("disabled");
    }) 
  }

  if(e.currentTarget.classList.contains('backspace')) {
    if (resultInput.value.slice(0, -1) === '') {
      calc.render(0);
    } else {
      calc.render(resultInput.value.slice(0, -1));
    }
  }

  if(e.currentTarget.classList.contains('equal')) {
    if (!archivInput.value) return;
    const archivString = String(archivInput.value).match(/[\d\.\,]+/g);
    if (archivString.length === 1) {
      const [firstNumber, sign, secondNumber] = calc.getSignAndValues();
      const res = new (switchOperation(sign))(firstNumber, secondNumber).execute();
      if (!(sign === '^' && (secondNumber === 2 || secondNumber === 3))) { calc.render(undefined, secondNumber) }
      calc.render(res);
    }
  }

  if(e.currentTarget.classList.contains('memory')) {
    if(e.currentTarget.id === 'memoryClearButton') memory.clear();
    if(e.currentTarget.id === 'memoryAddButton') memory.writeAdd(resultInput.value);
    if(e.currentTarget.id === 'memoryDivButton') memory.writeSub(resultInput.value);
    if(e.currentTarget.id === 'memoryReadButton') calc.render(memory.read());
  }
}));

export {calc};