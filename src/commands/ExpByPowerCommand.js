import BaseCommand from "./BaseCommand";

class ExpByPowerCommand extends BaseCommand {
    constructor(power) {
        super();
        this.power = power;
    }
    
    execute() {
        if (!this.power) {return ''};
        document.querySelector(".archiv").value = 'exp(' + this.power + ')';
        return 2.718281828459045 ** this.power;
    }
}

export default ExpByPowerCommand;

