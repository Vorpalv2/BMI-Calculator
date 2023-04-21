const express = require("express");
const bodyParser = require("body-parser");

let Height;
let Weight;
let result;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function(){
    console.log("Server is Running");
})

app.get("/",function(req,res) {
    res.sendFile(__dirname + "/bmicalculator.html");
})

app.post("/",function(req,res){
    Height = parseInt(req.body.Height);
    Weight = parseInt(req.body.Weight);
    result = Weight/ ((Height/100) * (Height/100));

    res.send(`Your BMI is ${result}`);
})




