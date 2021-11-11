import getOperation from './cmdDistribution'
import { resultInput, archivInput, calc, memory, divButtons } from './getVariables'

divButtons.addEventListener('click', ({ target }) => {
  const button = calc.getButton(target);
  if (resultInput.value === 'division by zero') {
    document.querySelectorAll('.btn').forEach((button) => {
      if (button.id !== 'clearButton') { button.setAttribute("disabled", true) }
    })
  } else {
    if (button.classList.contains('btn-numb')) calc.addNumber(button.value);

    if (button.classList.contains('simpleOperation')) {
      if (archivInput.value) {
        const archivString = String(archivInput.value).match(/[\d\.\,]+/g);
        if (archivString.length > 1) {
          calc.render('', resultInput.value + button.value);
        } else {
          const [firstNumber, sign, secondNumber] = calc.getSignAndValues();
          calc.render('', new (getOperation(sign))(firstNumber, secondNumber).execute() + button.value);
        }
      } else {
        const actualNumber = resultInput.value;
        calc.render('', actualNumber + button.value, '');
      }
    }

    if (button.classList.contains('root-pow')) {
      if (!resultInput.value) return;
      calc.render('', resultInput.value + `${button.value}`, '');
    }

    if (button.classList.contains('hardOper')) {
      if (button.hasAttribute('pow')) {
        const pow = button.getAttribute('pow');
        const powArchivValue = calc.getPowArchivValue(button, resultInput.value, pow);
        calc.render(new (getOperation(button.value))(resultInput.value, pow).execute(), powArchivValue);
      } else {
        const archivValue = calc.getArchivValue(button, resultInput.value);
        calc.render(new (getOperation(button.value))(resultInput.value).execute(), archivValue);
      }
    }

    if (button.classList.contains('backspace')) {
      if (resultInput.value.slice(0, -1) === '') {
        calc.render(0);
      } else {
        calc.render(resultInput.value.slice(0, -1));
      }
    }

    if (button.classList.contains('equal')) {
      if (!archivInput.value) return;
      const archivString = String(archivInput.value).match(/[\d\.\,]+/g);
      if (archivString.length === 1) {
        const [firstNumber, sign, secondNumber] = calc.getSignAndValues();
        const res = new (getOperation(sign))(firstNumber, secondNumber).execute();
        calc.render(res, archivInput.value += secondNumber);
      }
    }

    if (button.classList.contains('memory')) {
      if (button.id === 'memoryClearButton') memory.clear();
      if (button.id === 'memoryAddButton') memory.writeAdd(resultInput.value);
      if (button.id === 'memoryDivButton') memory.writeSub(resultInput.value);
      if (button.id === 'memoryReadButton') calc.render(memory.read());
    }
  }

  if (button.classList.contains('clear')) {
    calc.render('', '', '0');
    document.querySelectorAll('.btn').forEach((button) => {
      button.removeAttribute("disabled");
    })
  }
});