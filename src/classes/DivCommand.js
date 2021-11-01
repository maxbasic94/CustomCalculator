import Calc from "./Calc";

class DivCommand extends Calc {
    constructor(num1, num2) {
        super();
        this.num1 = num1;
        this.num2 = num2;
    }
    
    execute() {
        if (num2 === 0) {
            return 'division by zero';
        } else {
            return num1 / num2;
        }
    }
}

export default DivCommand;