import Calc from "./Calc";

class SquareCommand extends Calc {
    constructor(num, pow) {
        super();
        this.num = num;
        this.pow = pow;
    }
    
    execute() {
        return Math.pow(this.num, 1 / this.pow);
    }
}

export default SquareCommand;