import Calc from "./Calc";

class PercentCommand extends Calc {
    constructor(leftNumber, rightNumber) {
        super();
        this.leftNumber = leftNumber
        this.rightNumber = Number(rightNumber);
    }
    
    execute() {
        document.querySelector('.archiv').value =  this.rightNumber + '%';
        if (!this.rightNumber) {return ''};
        return this.rightNumber / this.leftNumber;
    }
}

export default PercentCommand;