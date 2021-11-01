import Calc from "./Calc";

class SquareCommand extends Calc {
    constructor(num, pow) {
        super();
        this.num = num;
        this.pow = pow;
    }
    
    execute() {
        return Math.pow(num, 1 / pow);
    }
}

export default SquareCommand;