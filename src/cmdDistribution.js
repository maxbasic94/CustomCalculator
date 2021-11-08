import AddCommand from './commands/AddCommand'
import SubCommand from './commands/SubCommand'
import MulCommand from './commands/MulCommand'
import DivCommand from './commands/DivCommand'
import PowCommand from './commands/PowCommand'
import SquareCommand from './commands/SquareCommand'

function switchOperation(sign, firstNumber, secondNumber) {
    switch (sign) {
      case '+': return new AddCommand(firstNumber, secondNumber).execute();
      case '-': return new SubCommand(firstNumber, secondNumber).execute();
      case '*': return new MulCommand(firstNumber, secondNumber).execute();
      case '/': return new DivCommand(firstNumber, secondNumber).execute();
      case '^': return new PowCommand(firstNumber, secondNumber).execute();
      case '√': return new SquareCommand(firstNumber, secondNumber).execute();
      default: return;
    }
}

export default switchOperation;