import BaseCommand from "./BaseCommand";

class LnCommand extends BaseCommand {
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