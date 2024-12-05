const  mongoose  = require("mongoose");

const schoolSchema = new mongoose.Schema({
    Schoolname:{
        type : String,
        required: true,
        unique:true,
    },
    Schooladdress:{
        type : String,
        require:true,
        unique:true,
    },
    coordinates: {
        type: [Number], 
        required: true,
      },
}, {timestamps:true});

module.exports = mongoose.model("Schools" , schoolSchema);