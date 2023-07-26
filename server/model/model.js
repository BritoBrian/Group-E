const mongoose=require('mongoose');
const scheme=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    gender:String,
    status:String,
    });