import Calc from "./Calc";

class OneDivByNumCommand extends Calc {
    constructor(actualNumber) {
        super();
        this.actualNumber = Number(actualNumber);
    }
    
    execute() {
        document.querySelector('.archiv').value = '1/' + this.actualNumber;
        if (this.actualNumber === 0) {
            return 'division by zero';
        } else {
            return Number(1 / this.actualNumber);
        }
    }
}

export default OneDivByNumCommand;