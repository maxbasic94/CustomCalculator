import Memory from './commands/Memory'

let memory = new Memory('');
const resultInput = document.querySelector('.result');

function performMemoryOperation(memoryButton) {
    switch (memoryButton.id) {
        case 'memoryClearButton':
            memory.clear();
            break;
        case 'memoryAddButton':
            memory.writeAdd(resultInput.value)
            break;
        case 'memoryDivButton':
            memory.writeSub(resultInput.value)
            break;
        case 'memoryReadButton':
            resultInput.value = memory.read()
            break;
        default:
            break;
    }
}

export default performMemoryOperation;