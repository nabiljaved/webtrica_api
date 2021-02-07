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
    expires : {
        type: String,
        required : true,
        trim : true, 
    },
    imageurl : {
        type: String,
        required : true,
        trim : true, 
    },
    city : {
        type: String,
        required : true,
        trim : true, 
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
}, {
    timestamps : true
})

const Promotion = mongoose.model('Promotion', promotionSchema)

module.exports = Promotion