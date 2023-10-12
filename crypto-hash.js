const crypto = require("crypto")

const cryptoHash =(...inputs)=>{
   const  hash = crypto.createHash("sha256");

   hash.update(inputs.sort().join(""));
   return   hash.digest('hex');
}

const result =cryptoHash("rutvik");
module.exports = {cryptoHash};
// console.log(result);