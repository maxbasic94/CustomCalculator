import BaseCommand from "./BaseCommand";

class ExpCommand extends BaseCommand {
    constructor() {
        super();
    }
    
    execute() {
        return 2.718281828459045;
    }
}

export default ExpCommand;

