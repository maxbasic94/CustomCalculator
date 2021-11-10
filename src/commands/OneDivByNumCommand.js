import BaseCommand from "./BaseCommand";

class OneDivByNumCommand extends BaseCommand {
    constructor(rightNumber) {
        super();
        this.leftNumber = 1;
        this.rightNumber = rightNumber;
    }
    
    execute() {
        if (this.rightNumber === 0) {
            return 'division by zero';
        } else {
            return Number(this.leftNumber / this.rightNumber);
        }
    }
}

export default OneDivByNumCommand;