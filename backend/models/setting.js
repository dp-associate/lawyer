const mongoose = require("mongoose");

const Setting = mongoose.Schema({
    casetype: {
        type:String,
    },
    lawyer : {
      type:String,
    }
       
  
   
    });
module.exports=mongoose.model("setting",Setting)



