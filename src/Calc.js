class Calc {
    constructor(input, archiv) {
        this.input = input;
        this.archiv = archiv;
    }
    
    render(inputValue, archivValue, placeholder) {
        if (inputValue !== undefined) {this.input.value = inputValue};
        if (archivValue !== undefined) {this.archiv.value = archivValue};
        if (placeholder !== undefined) {this.input.placeholder = placeholder};
    }

    addNumber(number) {
        this.input.value += number;
    }

    getSignAndValues(){
        const sign = this.archiv.value.slice(-1);
        const firstNumber = Number(this.archiv.value.slice(0, -1));
        const secondNumber = Number(this.input.value);
        return [firstNumber, sign, secondNumber];
    }
}

export default Calc;