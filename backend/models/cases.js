const mongoose = require("mongoose");

const Cases = mongoose.Schema({
    ClientName : {
        type:String,
    },
    rname : {
        type:String,  
    },
    firnumber : {
        type:String,
      },
    porr : {
        type:String,possibleValues: ['petitioner','respondent']
      },
    cnumber : {
        type:String,
    },
    ctype : {
        type:String,
    },
    courtname : {
        type:String,
    },
    fdate : {
        type:String,
    },
    hdate : {
        type:String,
    },
    comment : {
        type:String,
    },
    filename : {
        type:String,
    },
    
    lawyer : {
      type:String,
    }
   
    });
module.exports=mongoose.model("cases",Cases)



