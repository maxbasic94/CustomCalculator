import AddCommand from './commands/AddCommand'
import SubCommand from './commands/SubCommand'
import MulCommand from './commands/MulCommand'
import DivCommand from './commands/DivCommand'
import PowCommand from './commands/PowCommand'
import SquareCommand from './commands/SquareCommand'

function switchOperation(sign, firstNumber, secondNumber) {
    let res;
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
    return res;
}

export default switchOperation;