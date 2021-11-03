import Calc from "./Calc";

class ExpByPowerCommand extends Calc {
    constructor(power) {
        super();
        this.power = Number(power);
    }
    
    execute() {
        if (!this.power) {return ''};
        document.querySelector(".archiv").value = 'exp(' + this.power + ')';
        return 2.718281828459045 ** this.power;
    }
}

export default ExpByPowerCommand;

