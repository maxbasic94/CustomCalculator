import Calc from "./Calc";

class PowCommand extends Calc {
    constructor(num, pow) {
        super();
        this.num = num;
        this.pow = pow;
    }
    
    execute() {
        return Math.pow(num, pow);
    }
}

export default PowCommand;