require("dotenv").config({
  path: __dirname + "/.env",
  encoding: "utf8",
});
console.log(__dirname + "\.env")
module.exports = {
  Headers: process.env.HEADERS,
  privateKey: process.env.PRIVATEKEY
  
};
