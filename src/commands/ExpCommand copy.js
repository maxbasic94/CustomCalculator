import Calc from "./Calc";

class ExpCommand extends Calc {
    constructor() {
        super();
    }
    
    execute() {
        return 2.718281828459045;
    }
}

export default ExpCommand;

