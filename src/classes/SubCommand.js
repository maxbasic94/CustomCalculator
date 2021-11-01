import Calc from "./Calc";

class SubCommand extends Calc {
    constructor(num1, num2) {
        super();
        this.num1 = num1;
        this.num2 = num2;
    }
    
    execute() {
        return this.num1 - this.num2
    }
}

export default SubCommand;