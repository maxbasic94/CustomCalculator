import Calc from './Calc';
import Memory from './commands/Memory'

const resultInput = document.querySelector('.result');
const archivInput = document.querySelector('.archiv');
const calc = new Calc(resultInput, archivInput);
const memory = new Memory('');
const divButtons = document.querySelector('.buttons');
const allButtons = document.querySelectorAll('.btn');


export {resultInput, archivInput, calc, memory, divButtons, allButtons}