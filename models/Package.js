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
            address : {
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
            service : {
                type: String,
                required : true,
                trim : true, 
            },
            phone : {
                type: String,
                required : true,
                trim : true, 
            },
            time : {
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