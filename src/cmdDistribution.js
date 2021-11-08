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
import ExpCommand from './commands/ExpCommand copy'

function switchOperation(sign) {
    switch (sign) {
      case '+': return AddCommand;
      case '-': return SubCommand;
      case '*': return MulCommand;
      case '/': return DivCommand;
      case '^': return PowCommand;
      case '√': return SquareCommand;
      case '1/x': return OneDivByNumCommand;
      case '%': return PercentCommand;
      case 'ln': return LnCommand;
      case 'log': return LogCommand;
      case 'exp': return ExpByPowerCommand;
      case 'e': return ExpCommand;
      default: return 'operation in not found';
    }
}

export default switchOperation;