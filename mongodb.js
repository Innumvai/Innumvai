const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin-gokulkannan:Gokul%40003@cluster0.yecwj5g.mongodb.net/signup?authSource=Cluster0&authMechanism=SCRAM-SHA-1")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed");
})

const Signinschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const collection=new mongoose.model("Collection",Signinschema);

module.exports=collection;
