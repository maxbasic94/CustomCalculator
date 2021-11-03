import Calc from "./Calc";

class LogCommand extends Calc {
    constructor(actualNumber) {
        super();
        this.actualNumber = Number(actualNumber)
    }
    
    execute() {
        document.querySelector(".archiv").value = 'log(' + this.actualNumber + ')';
        if (this.actualNumber === '' || this.actualNumber === 'ln by zero') {return ''};
        if (this.actualNumber === '0') {
            return 'ln by zero';
        } else {
            return Math.log10(this.actualNumber);
        }
    }
}

export default LogCommand;