import BaseCommand from "./BaseCommand";

class AddCommand extends BaseCommand {
    constructor(num1, num2) {
        super();
        this.num1 = num1;
        this.num2 = num2;
    }
    
    execute() {
        return this.num1 + this.num2
    }
}

export default AddCommand;