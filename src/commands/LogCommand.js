import BaseCommand from "./BaseCommand";

class LogCommand extends BaseCommand {
    constructor(actualNumber) {
        super();
        this.actualNumber = actualNumber
    }
    
    execute() {
        if (this.actualNumber === '' || this.actualNumber === 'ln by zero') {return ''};
        if (this.actualNumber === '0') {
            return 'ln by zero';
        } else {
            return Math.log10(this.actualNumber);
        }
    }
}

export default LogCommand;