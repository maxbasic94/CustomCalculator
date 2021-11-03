import Calc from "./Calc";

class PowCommand extends Calc {
    constructor(num, pow) {
        super();
        this.num = num;
        this.pow = pow;
    }
    
    execute() {
        if (this.pow === 2 || this.pow === 3) {document.querySelector('.archiv').value = this.num + '^' + this.pow}
        return this.num ** this.pow;
    }
}

export default PowCommand;