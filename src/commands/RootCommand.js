import BaseCommand from "./BaseCommand";

class SquareCommand extends BaseCommand {
    constructor(num, pow) {
        super();
        this.num = num;
        this.pow = pow;
    }
    
    execute() {
        return this.num ** (1 / this.pow);
    }
}

export default SquareCommand;