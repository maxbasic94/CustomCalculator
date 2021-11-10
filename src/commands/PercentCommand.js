import BaseCommand from "./BaseCommand";

class PercentCommand extends BaseCommand {
    constructor(rightNumber) {
        super();
        this.leftNumber = 100;
        this.rightNumber = rightNumber;
    }
    
    execute() {
        if (!this.rightNumber) {return ''};
        return this.rightNumber / this.leftNumber;
    }
}

export default PercentCommand;