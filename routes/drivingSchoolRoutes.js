const { Router } = require('express');
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminControllers');
const apiController = require('../controllers/apiControllers');
const { requireAuth, checkUser, protectedRoutes,redirectRoutes } = require('../middleware/authMiddleware');
const expressLayouts = require("express-ejs-layouts");
const router = Router();

// post router




router.get('/promotions_page', (req, res) => res.render('promotions'));
router.get('/contacts-page', (req, res) => res.render('contacts-page'));
router.get('/packages-page', (req, res) => res.render('packages-page' ,{ layout: 'dashboard' }));
router.get('/promotions', authController.getPromotion);
router.get('/contacts', authController.getContacts);
router.get('/packages', authController.getPackages);
router.post('/promotions', authController.addPromotion);
router.post('/contacts', authController.addContacts);


//Routes Canadian Digital driving School ----- API's

router.get('/driving-school-location', apiController.getLocations);
router.get('/driving-school-contacts', apiController.getContacts);
router.get('/driving-school-promotions', apiController.getPromotions);
router.get('/driving-school-packages', apiController.getPackages);




//Routes Canadian Digital driving School ----- Render
router.get('/', (req, res) => res.render('index'));
router.get('/home', (req, res) => res.render('home'));
router.get('/package', (req, res) => res.render('package'));
router.get('/job-opportunity', (req, res) => res.render('job-opportunity'));
router.get('/make-payment', (req, res) => res.render('make-payment'));
router.get('/contact-us', (req, res) => res.render('contact-us'));
router.get('/book-package-page', (req, res) => res.render('show-book-page'));
router.post('/driving-school-getPackageByCityName', apiController.getPackagesByCityName);


//render post routes

router.post('/contact-us-form', apiController.contactUs);
router.post('/job-opportunity-form', apiController.jobOpportunity);

module.exports = router;