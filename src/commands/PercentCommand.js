import Calc from "./Calc";
import { calc } from "../app";

class PercentCommand extends Calc {
    constructor(rightNumber) {
        super();
        this.leftNumber = 100;
        this.rightNumber = Number(rightNumber);
    }
    
    execute() {
        calc.render(undefined, `${this.rightNumber}%`)
        if (!this.rightNumber) {return ''};
        return this.rightNumber / this.leftNumber;
    }
}

export default PercentCommand;