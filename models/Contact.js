const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({

    name : {
        type: String,
        required : true,
        trim : true, 
    },
    imageurl : {
        type: String,
        required : true,
        trim : true, 
    },
    phone : {
        type: String,
        required : true,
        trim : true, 
    },
}, {
    timestamps : true
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact