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
    static isValidChain(chain){
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.Genesis())) return false;
  
        for(let i=1; i<chain.length; i++){
         const {timestamp, prevHash, hash, data} = chain[i];
           
         const realLastData = chain[i-1].hash;
  
         if(prevHash !== realLastData) return false;
  
         const validHash = cryptoHash(timestamp,prevHash, hash, data);
  
         if(hash !== validHash) return false;
         
        }
        return true;
    }
}

const block = new Blockchain();
block.addBlock({data:"blocks"});

const res = Blockchain.isValidChain(Blockchain.chain);

console.log(res);

// console.log(block);

module.exports = Blockchain