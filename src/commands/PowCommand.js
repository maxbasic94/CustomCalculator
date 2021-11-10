import BaseCommand from "./BaseCommand";

class PowCommand extends BaseCommand {
    constructor(num, pow) {
        super();
        this.num = num;
        this.pow = pow;
    }
    
    execute() {
        return this.num ** this.pow;
    }
}

export default PowCommand;