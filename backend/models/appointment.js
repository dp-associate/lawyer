const mongoose = require("mongoose");

const Appointment = mongoose.Schema({
    clientName : {
        type:String,
    },
    mobileno : {
        type:Number,  
    },
    date : {
        type:String,
      },
    time : {
        type:String
      },
    note : {
        type:String,
    },
    lawyer : {
      type:String,
    }
    
    });
module.exports=mongoose.model("appointments",Appointment)



