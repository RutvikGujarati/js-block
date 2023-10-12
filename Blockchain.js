const block = require("./block")

class Blockchain{
    constructor(){
        this.chain = [Block.Genesis()];
    }
    addBlock({data}){
        const newBlock = Block.mine({
            prevBlock: this.chain[this.chain.length-1],
            
        })
    }
}