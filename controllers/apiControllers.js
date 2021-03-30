const Package = require('../models/Package');
const Promotion = require('../models/Promotion')
const Contact = require('../models/Contact')
const ContactUs = require('../models/ContactUs')
const Booking = require('../models/Booking')
const JobOpportunity = require('../models/JobOpportunity')




module.exports.getLocations = async(req, res) => {

    const packages = await Package.find({}, 'location')
    try {
        res.status(201).json(packages); // created = 201
    } catch (e) {
        res.status(400).json({ errors: "could not get packages location" }) // bad error = 400
    }

}

module.exports.getContacts = async(req, res) => {

    const contacts = await Contact.find({})
    try {
        res.status(201).json(contacts); // created = 201
    } catch (e) {
        res.status(400).json({ errors: "could not get packages location" }) // bad error = 400
    }

}

module.exports.getPromotions = async(req, res) => {

    const promotions = await Promotion.find({})
    try {
        res.status(201).json(promotions); // created = 201
    } catch (e) {
        res.status(400).json({ errors: "could not get promotions" }) // bad error = 400
    }

}


module.exports.getPackages = async(req, res) => {


    const packages = await Package.find({})
    try {
        res.status(201).json(packages); // created = 201
    } catch (e) {
        res.status(400).json({ errors: "could not get packages" }) // bad error = 400
    }
}


module.exports.getPackagesByCityName = async(req, res) => {

    const { location } = req.body;

    const packages = await Package.find({ location: location })
    try {
        res.status(201).json(packages); // created = 201
        console.log(packages)
    } catch (e) {
        res.status(400).json({ errors: "could not get packages" }) // bad error = 400
    }

    console.log(location)

}

module.exports.jobOpportunity = async(req, res) => {

    const { name, email, phone, subject, message } = req.body;

    try {
        const jobs = new JobOpportunity({ name, email, phone, subject, message })
        await jobs.save()
            // response.redirect('/admin-dashboard');
        res.status(200).json({ jobs: jobs, message: "job is sent successfully" }) // created = 201
        console.log(jobs)
    } catch (e) {
        res.status(400).json({ errors: "could not sent message", er: e }) // bad error = 400
        console.log(e.message)
    }

}

module.exports.contactUs = async(req, res) => {

    const { name, email, phone, subject, message } = req.body;



    try {
        const contactus = new ContactUs({ name, email, phone, subject, message })
        await contactus.save()
            // response.redirect('/admin-dashboard');
        res.status(200).json({ contactus: contactus, message: "message is sent successfully" }) // created = 201
        console.log(packages)
    } catch (e) {
        res.status(400).json({ errors: "could not sent message", er: e }) // bad error = 400
        console.log(e.message)
    }


}

module.exports.packageBooking = async(req, res) => {


    const { name, email, phone, package, location, message, date } = req.body

    try {
        const booking = new Booking({ name, email, phone, package, location, message, date })
        await booking.save()
        res.status(200).json({ booking: booking, message: "package is booked successfully" }) // created = 201
        console.log(packages)
    } catch (e) {
        res.status(400).json({ errors: "package could not booked", er: e }) // bad error = 400
        console.log(e.message)
    }

}

module.exports.getBookings = async(req, res) => {

    const bookings = await Booking.find({})

    try {
        res.status(201).json(bookings); // created = 201
    } catch (e) {
        res.status(400).json({ errors: "could not get bookings" }) // bad error = 400
    }

}

module.exports.getJobs = async(req, res) => {

    const jobs = await JobOpportunity.find({})

    try {
        res.status(201).json(jobs); // created = 201
    } catch (e) {
        res.status(400).json({ errors: "could not get bookings" }) // bad error = 400
    }

}

module.exports.getPeopleContactedUs = async(req, res) => {

    const contacts = await ContactUs.find({})

    res.json(contacts)


}


module.exports.listOfMovies = async(req, res) => {

    var movies = [

        {title: "Thanos", image: "https://img.theweek.in/content/dam/week/news/entertainment/images/2019/4/26/thanos-avengers-infinity.jpg"},
        {title: "Superman" , image: "https://i1.wp.com/batman-news.com/wp-content/uploads/2021/03/Iron-Studios-DC-Comics-Superman-ZSJL-Black-Suit-Featured-01.jpg?resize=696%2C392&quality=80&strip=info&ssl=1"},
        {title: "WonderWomen",image:"https://i.ytimg.com/vi/VSB4wGIdDwo/maxresdefault.jpg"},
        {title: "Snyder",image:"https://nofilmschool.com/sites/default/files/styles/article_wide/public/snyder_cut_justice_league.jpeg?itok=veAG9BIg"},
        {title: "AquaMan",image:"data:image/jpeg;base64,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"},
        {title: "Stepenwold",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjy73317dnF2EnkrwEYe26XFSU_cuTqpgzXiU0YW6vUmE0J2javqiCmIRmVEr6mJ5ALoY&usqp=CAU"},
        {title: "lanern",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzicWYPDy2dSZczbIFsH_0K4w-G5TnrnzI--Gg2lsAHbmlBJAyIQzDsEjyMZcNQhBw3Q&usqp=CAU"},
        {title: "Batman",image:"https://www.slashfilm.com/wp/wp-content/images/Zack-Snyder-Batmn.jpg"},
        {title: "Thor",image:"https://www.denofgeek.com/wp-content/uploads/2019/07/thor-4-marvel-chris-hemsworth.jpg?resize=768%2C432"},
        {title: "CaptainAmerica",image:"https://i.pinimg.com/736x/68/9d/05/689d05a34bf9612f6742f3bb643981e5.jpg"}

    ]

    res.json(movies)


}