class Calc {
    constructor(input, archiv) {
        this.input = input;
        this.archiv = archiv;
    }
    
    execute() {
        return 'method is not implemended'
    }

    render(inputValue, archivValue, placeholder) {
        console.log(inputValue);
        console.log(archivValue);
        console.log(placeholder);
        if (inputValue !== undefined) {this.input.value = inputValue};
        if (archivValue !== undefined) {this.archiv.value = archivValue};
        if (placeholder !== undefined) {this.input.placeholder = placeholder};
    }

    addNumber(number) {
        this.input.value += number;
    }
}

export default Calc;