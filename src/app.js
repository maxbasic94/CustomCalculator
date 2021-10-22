const inputExpression = document.querySelector('.expression');
const inputResult = document.querySelector('.result');

let buttons = document.querySelectorAll('.btn');
for (let button of buttons) {
    button.addEventListener('click', () => {
        if (button.value === 'AC') {
            inputExpression.value = '';
            inputResult.value = '0,0';
        } else if(button.value === 'C') {
            backspace();
        } else {
            func(button.value);
        }
    });
}

function backspace() {
    inputExpression.value = inputExpression.value.substring(0, inputExpression.value.length-1);
}

function func(item) {
    inputExpression.value = inputExpression.value + item;
}

class Calc {
    result = 0;

    add(num) {
        this.result += num;
        return this;
    }
    
    sub(num) {
        this.result -= num;
        return this;
    }

    mul(num) {
        this.result *= num;
        return this;
    }

    div(num) {
        this.result /= num;
        return this;
    }

    square(num) {
        this.result **= num;
        return this;
    }

    cube(num) {
        this.result = Math.pow(num, 3);
        return this;
    }

    get result() {
        return this.result;
    }
}

let a = new Calc().add(8).sub(1).square(4).result;
inputResult.value = a;

console.log(a)