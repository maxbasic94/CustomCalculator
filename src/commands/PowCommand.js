import Calc from "./Calc";
import { calc } from "../app";

class PowCommand extends Calc {
    constructor(num, pow) {
        super();
        this.num = Number(num);
        this.pow = Number(pow);
    }
    
    execute() {
        if (this.pow === 2 || this.pow === 3) {calc.render(undefined, `${this.num}^${this.pow}`)};
        return this.num ** this.pow;
    }
}

export default PowCommand;