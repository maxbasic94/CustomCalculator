import AddCommand from './commands/AddCommand'
import SubCommand from './commands/SubCommand'
import MulCommand from './commands/MulCommand'
import DivCommand from './commands/DivCommand'
import PowCommand from './commands/PowCommand'
import SquareCommand from './commands/SquareCommand'
import OneDivByNumCommand from './commands/OneDivByNumCommand'
import PercentCommand from './commands/PercentCommand'
import LnCommand from './commands/LnCommand'
import LogCommand from './commands/LogCommand'
import ExpByPowerCommand from './commands/ExpByPowerCommand'

function switchOperation(sign, firstNumber, secondNumber) {
    switch (sign) {
      case '+': return new AddCommand(firstNumber, secondNumber).execute();
      case '-': return new SubCommand(firstNumber, secondNumber).execute();
      case '*': return new MulCommand(firstNumber, secondNumber).execute();
      case '/': return new DivCommand(firstNumber, secondNumber).execute();
      case '^': return new PowCommand(firstNumber, secondNumber).execute();
      case '√': return new SquareCommand(firstNumber, secondNumber).execute();
      case '1/x': return new OneDivByNumCommand(firstNumber, secondNumber).execute();
      case '%': return new PercentCommand(firstNumber, secondNumber).execute();
      case 'ln': return new LnCommand(firstNumber).execute();
      case 'log': return new LogCommand(firstNumber).execute();
      case 'exp': return new ExpByPowerCommand(firstNumber).execute();
      case 'e': return 2.718281828459045;
      default: return 'operation in not found';
    }
}

export default switchOperation;