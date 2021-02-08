const { Router } = require('express');
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminControllers');
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


//Routes Canadian Digital driving School
router.get('/', (req, res) => res.render('index'));
router.get('/home', (req, res) => res.render('home'));
router.get('/package', (req, res) => res.render('package'));
router.get('/job-opportunity', (req, res) => res.render('job-opportunity'));
router.get('/make-payment', (req, res) => res.render('make-payment'));
router.get('/contact-us', (req, res) => res.render('contact-us'));


module.exports = router;