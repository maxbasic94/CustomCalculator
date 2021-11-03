// function performNaturalLog() {
//     if (!resultInput.value || resultInput.value === 'ln by zero') {return ''};
//     let actualNumber = resultInput.value;
//     document.querySelector(".archiv").value = 'ln(' + actualNumber + ')';
//     if (actualNumber === '0') {
//         return 'ln by zero';
//     } else {
//         return Math.log(actualNumber);
//     }
// }

// function performDecimalLog() {
//     if (!resultInput.value || resultInput.value === 'log by zero') {return ''};
//     let actualNumber = resultInput.value;
//     document.querySelector(".archiv").value = 'log10(' + actualNumber + ')';
//     if (actualNumber === '0') {
//         return 'log by zero';
//     } else {
//         return Math.log10(actualNumber);
//     }
// }

function performExpByPower() {
    if (!resultInput.value) {return ''};
    let actualNumber = resultInput.value;
    document.querySelector(".archiv").value = 'exp(' + actualNumber + ')';
    return Math.exp(actualNumber);
}

const resultInput = document.querySelector('.result');

module.exports = { performExpByPower};