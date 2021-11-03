import Calc from "./Calc";

class SquareCommand extends Calc {
    constructor(num, pow) {
        super();
        this.num = num;
        this.pow = pow;
    }
    
    execute() {
        if (this.pow === 2 || this.pow === 3) {document.querySelector('.archiv').value = this.pow + '√' + this.num}
        return this.num ** (1 / this.pow);
    }
}

export default SquareCommand;