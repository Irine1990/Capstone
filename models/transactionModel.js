const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:true,
    },
    amount :{
        type: Number,
        
        trim:true,
        maxLength: 20
    },
    type:{
        type:String,
        default:"income"
    },
    date:{
        type:Date,
       
        trim:true,
    
    },
    category:{
        type:String,
        required:true,
        maxLength: 20,
        trim: true,
    },

    reference:{
        type: String,
    },

    // description:{
    //     type: String,
    //     required: true,
    //     maxLength: 20,
    //     trim: true    
    // },
},
    {timestamps: true}
    )



const transactionModel = mongoose.model('transactions', transactionSchema);
module.exports = transactionModel;