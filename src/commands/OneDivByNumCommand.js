import Calc from "./Calc";
import { calc } from "../app";

class OneDivByNumCommand extends Calc {
    constructor(rightNumber) {
        super();
        this.leftNumber = 1;
        this.rightNumber = Number(rightNumber);
    }
    
    execute() {
        calc.render( undefined, `${this.leftNumber}/${this.rightNumber}`)
        if (this.rightNumber === 0) {
            return 'division by zero';
        } else {
            return Number(this.leftNumber / this.rightNumber);
        }
    }
}

export default OneDivByNumCommand;