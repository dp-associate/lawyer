const mongoose = require("mongoose");

const Client = mongoose.Schema({
    name : {
        type:String,
    },
    mobileno : {
        type:Number,  
    },
    email : {
        type:String,
      },
    gender : {
        type:String,//possibleValues: ['male','female']
      },
    address : {
        type:String,
    },
    lawyer : {
      type:String,
    }
       
  
   
    });
module.exports=mongoose.model("client",Client)



