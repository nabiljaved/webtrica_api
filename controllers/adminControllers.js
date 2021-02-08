const Package = require('../models/Package');
const Promotion = require('../models/Promotion')
const Contact = require('../models/Contact')

const jwt = require('jsonwebtoken');


module.exports.addPackages = async(req, res) => {
  
 
    const {location, package, title, description, price, valid, expires} = req.body;
    console.log(location, package, title, description, price, valid, expires)
    try {
        const packages = new Package({location,package, options: [{title,description, price,valid, expires}]})
        await packages.save()
        // response.redirect('/admin-dashboard');
        res.status(200).json({packages: packages, message:"package is addedd successfully"}) // created = 201
        //console.log(packages)
    } catch (e) {
        res.status(400).json({errors: "could not add package", er:e}) // bad error = 400
        console.log(e.message)
    }

  }

  module.exports.addPromotion = async(req, res) => {
  
 
    const {title, description,expire, city} = req.body;
    console.log(title, description,expire, city)
    try {
        const promotion = new Promotion({title, description,expire, city})
        await promotion.save()
        //res.redirect('/admin-dashboard');
        res.status(200).json({promotion: promotion, message:"package is addedd successfully"}) // created = 201
        //console.log(packages)
    } catch (e) {
        res.status(400).json({errors: "could not add package", er:e}) // bad error = 400
        // console.log(e.message)
        res.redirect('/admin-dashboard');
    }

  }

  module.exports.addContact = async(req, res) => {
  
 
    const {name, address, phone} = req.body;
    console.log(name, address, phone)
    try {
        const contact = new Contact({name, address, phone})
        await contact.save()
        //res.redirect('/admin-dashboard');
        res.status(200).json({contact: contact, message:"contact is addedd successfully"}) // created = 201
        //console.log(packages)
    } catch (e) {
        res.status(400).json({errors: "could not add package", er:e}) // bad error = 400
        // console.log(e.message)
        res.redirect('/admin-dashboard');
    }

  }