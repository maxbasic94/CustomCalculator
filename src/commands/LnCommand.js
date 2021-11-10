import BaseCommand from "./BaseCommand";

class LnCommand extends BaseCommand {
    constructor(actualNumber) {
        super();
        this.actualNumber = actualNumber
    }
    
    execute() {
        if (this.actualNumber === '' || this.actualNumber === 'ln by zero') {return ''};
        if (this.actualNumber === '0') {
            return 'ln by zero';
        } else {
            return Math.log(this.actualNumber);
        }
    }
}

export default LnCommand;