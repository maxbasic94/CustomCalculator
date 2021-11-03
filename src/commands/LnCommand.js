import Calc from "./Calc";

class LnCommand extends Calc {
    constructor(actualNumber) {
        super();
        this.actualNumber = Number(actualNumber)
    }
    
    execute() {
        document.querySelector(".archiv").value = 'ln(' + this.actualNumber + ')';
        if (this.actualNumber === '' || this.actualNumber === 'ln by zero') {return ''};
        if (this.actualNumber === '0') {
            return 'ln by zero';
        } else {
            return Math.log(this.actualNumber);
        }
    }
}

export default LnCommand;