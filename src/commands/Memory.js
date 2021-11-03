class Memory {
    constructor(memory) {
        this.memory = memory;
    }

    read() {
        return this.memory;
    }

    clear() {
        this.memory = '';
    }

    writeAdd(value) {
        this.memory += value
    }

    writeSub(value) {
        this.memory -= value
    }
}    

export default Memory;