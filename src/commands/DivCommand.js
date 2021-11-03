import Calc from "./Calc";

class DivCommand extends Calc {
    constructor(num1, num2) {
        super();
        this.num1 = num1;
        this.num2 = num2;
    }
    
    execute() {
        if (this.num2 === 0) {
            return 'division by zero';
        } else {
            return this.num1 / this.num2;
        }
    }
}

export default DivCommand;