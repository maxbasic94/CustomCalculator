import BaseCommand from "./BaseCommand";
import { calc } from "../app";

class SquareCommand extends BaseCommand {
    constructor(num, pow) {
        super();
        this.num = Number(num);
        this.pow = Number(pow);
    }
    
    execute() {
        if (this.pow === 2 || this.pow === 3) {calc.render(undefined, `${this.pow}√${this.num}`)}
        return this.num ** (1 / this.pow);
    }
}

export default SquareCommand;