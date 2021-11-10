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

    getButton(target) {
        if(target.classList.contains('btn')) {
            return target;
        } else {
            return target.parentNode;
        }
    }

    getPowArchivValue(button, value, pow) {
        if(button.value === '^') {
            return value + button.value + pow
        } else {
            return pow + button.value + value
        }
    }

    getArchivValue(button, value) {
        if (button.value === '%') return value + button.value;
        if (button.value === 'ln') return 'ln(' + value + ')';
        if (button.value === 'log') return 'log(' + value + ')';
        if (button.value === '1/x') return '1/' + value;
        if (button.value === 'exp') return 'exp(' + value + ')';
    }
}

export default Calc;