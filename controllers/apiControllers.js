const Package = require('../models/Package');
const Promotion = require('../models/Promotion')
const Contact = require('../models/Contact')



module.exports.getLocations = async(req, res) => {

    const packages = await Package.find({}, 'location')
    try {
        res.status(201).json(packages); // created = 201
    } catch (e) {
        res.status(400).json({errors:"could not get packages location"}) // bad error = 400
    }
 
}

module.exports.getContacts = async(req, res) => {

    const contacts = await Contact.find({})
    try {
        res.status(201).json(contacts); // created = 201
    } catch (e) {
        res.status(400).json({errors:"could not get packages location"}) // bad error = 400
    }
 
}

module.exports.getPromotions = async(req, res) => {

    const promotions = await Promotion.find({})
    try {
        res.status(201).json(promotions); // created = 201
    } catch (e) {
        res.status(400).json({errors:"could not get promotions"}) // bad error = 400
    }
 
}


module.exports.getPackages = async(req, res) => {

   
    const packages = await Package.find({})
    try {
        res.status(201).json(packages); // created = 201
    } catch (e) {
        res.status(400).json({errors:"could not get packages"}) // bad error = 400
    }
}


module.exports.getPackagesByCityName = async(req, res) => {

    const {location} = req.body;

    const packages = await Package.find({location:location})
    try {
        res.status(201).json(packages); // created = 201
    } catch (e) {
        res.status(400).json({errors:"could not get packages"}) // bad error = 400
    }

    console.log(location)

}  