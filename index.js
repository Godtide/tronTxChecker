const express = require("express")
const app = express()


const morgan = require('morgan')
app.use(morgan("combined"))


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const tronhandler = require('./routes/tronweb') 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/v1/getTxInfo',tronhandler.main)


// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"});
    next();
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",port))
});

