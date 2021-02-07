const mongoose = require('mongoose')

const packageSchema = new mongoose.Schema({

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
    imageUrl : {
        type: String,
        required : true,
        trim : true, 
    },
    promotionCode : {
        type: String,
        required : true,
        trim : true, 
    },
    price : {
        type: String,
        required : true,
        trim : true, 
    },
    
}, {
    timestamps : true
})

const Package = mongoose.model('Package', packageSchema)

module.exports = Package