import Calc from "./Calc";

class OneDivByNumCommand extends Calc {
    constructor(leftNumber, rightNumber) {
        super();
        this.leftNumber = Number(leftNumber);
        this.rightNumber = Number(rightNumber);
    }
    
    execute() {
        document.querySelector('.archiv').value = this.leftNumber + this.rightNumber;
        if (this.rightNumber === 0) {
            return 'division by zero';
        } else {
            return Number(this.leftNumber / this.rightNumber);
        }
    }
}

export default OneDivByNumCommand;