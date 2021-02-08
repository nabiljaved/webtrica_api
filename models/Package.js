const mongoose = require('mongoose')

const packageSchema = new mongoose.Schema({
    location : {
        type: String,
        required : true,
        trim : true, 
    },
    package : {
        type: String,
        required : true,
        trim : true, 
    },
    options : [
        {
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
            price : {
                type: String,
                required : true,
                trim : true, 
            },
            valid : {
                type: String,
                required : true,
                trim : true, 
            },
            expires : {
                type: String,
                required : true,
                trim : true, 
            },
        }
    ],
}, {
    timestamps : true
})

const Package = mongoose.model('Package', packageSchema)

module.exports = Package