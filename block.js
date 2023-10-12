const {Genesis_block} = require("./config");
const {cryptoHash} = require("./crypto-hash")

class Block {
  constructor({ timestamp, prevHash, hash, data })/*create an object for identify values when we pass into object. */ {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
  }
  static Genesis(){
    return new this(Genesis_block);
  }
  static mine({prevBlock, data}){
       const timestamp = Date.now();
       const prevHash = prevBlock.hash;
       return new this({
        timestamp,
        prevHash,
        data,
        hash: cryptoHash(timestamp, prevHash, data),
       })

  }
}



const Block1 = new Block({
    timestamp: "3728",
    prevHash: "0xeuiwopew",
    hash: "0x72987rjhwjk",
    data: "yah!",
});
// console.log(Block1);

// const gen = Block.Genesis();
// console.log(gen);

// const res = Block.mine({prevBlock:Block1, data: "Block2"});
// console.log(res);