
const config = require('../config/config')

const TronWeb = require('tronweb')

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: config.Headers,
    privateKey: config.privateKey
})


 async function main(req,res, next) {
console.log(req.body)

  let data = req.body;

  const errors=[]
  
  if (!req.body){
      errors.push("No txId inputed");
  }
  if (errors.length){
      res.status(400).json({"error":errors.join(",")});
      return;
  }
  

  try {
    let result =  await Promise.resolve(tronWeb.trx.getTransaction(data));
    console.log(`Transaction details by Id: ${result.id}`);
    if(result.id == data){
      res.status(200).json({
        "message": "success",
        "data": result.json(),
    })
     }
     else{
      res.status(400).json("internal Blockchain error");
     }
  } catch (error) {
    console.log("error message tron network:", error.message)
      res.status(400).json({"error": error.message})
  }
    next();
  }


    
module.exports = {
 main
};

