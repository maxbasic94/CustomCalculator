import Calc from "./Calc";

class PercentCommand extends Calc {
    constructor(actualNumber) {
        super();
        this.actualNumber = Number(actualNumber);
    }
    
    execute() {
        document.querySelector('.archiv').value =  this.actualNumber + '%';
        if (!this.actualNumber) {return ''};
        return this.actualNumber / 100;
    }
}

export default PercentCommand;