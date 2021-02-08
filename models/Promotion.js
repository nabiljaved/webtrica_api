const mongoose = require('mongoose')

const promotionSchema = new mongoose.Schema({

    title : {
        type: String,
        required : true,
        trim : true, 
    },
    description : {
        type: String,
        required : true,
        trim : true, 
    },
    expire : {
        type: String,
        required : true,
        trim : true, 
    },
    city : {
        type: String,
        required : true,
        trim : true, 
    },
   
}, {
    timestamps : true
})

const Promotion = mongoose.model('Promotion', promotionSchema)

module.exports = Promotion