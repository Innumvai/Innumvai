const express = require("express");
const bodyParser = require("body-parser");
const path=require("path");
const ejs = require ("ejs");
const collection=require("./mongodb");

const app = express();
app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("views/image"));
app.use(bodyParser.urlencoded({extended:false}));

app.get("/" ,function(req,res){
    res.render("signin");
})


app.get("/home" , function(req,res){
    res.sendFile(__dirname + "/home.html");
});


app.post("/",async(req,res) =>{
    const data={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        address:req.body.address
    }

    await collection.insertMany([data])
    res.sendFile(__dirname + "/home.html");
})


app.listen(3000,function(){
    console.log("Server run in 8000");
});
