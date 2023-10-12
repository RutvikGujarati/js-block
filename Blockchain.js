const Block = require("./block")

class Blockchain{
    constructor(){
        this.chain = [Block.Genesis()];
    }
    addBlock({data}){
        const newBlock = Block.mine({
            prevBlock: this.chain[this.chain.length-1],
            data,
        });
        this.chain.push(newBlock);
    }
}

const block = new Blockchain();
block.addBlock({data:"blocks"});

console.log(block);

module.exports = Blockchain