const { Router } = require('express');
const authController = require('../controllers/authController');
const { requireAuth, checkUser, protectedRoutes,redirectRoutes } = require('../middleware/authMiddleware');
const expressLayouts = require("express-ejs-layouts");
const router = Router();
var path = require('path');
// post router
router.use(expressLayouts)



router.get('/promotions_page', (req, res) => res.render('promotions'));
router.get('/contacts-page', (req, res) => res.render('contacts-page'));
router.get('/packages-page', (req, res) => res.render('packages-page' ,{ layout: 'dashboard' }));
router.get('/promotions', authController.getPromotion);
router.get('/contacts', authController.getContacts);
router.get('/packages', authController.getPackages);
router.post('/promotions', authController.addPromotion);
router.post('/contacts', authController.addContacts);
router.post('/packages', authController.addPackages);

router.get('/', requireAuth, (req, res) => res.render('promotion-page', { layout: 'dashboard' }));
router.get('/add-promotion', requireAuth, (req, res) => res.render('promotion-page', { layout: 'dashboard' }));
router.get('/add-package', requireAuth, (req, res) => res.render('package-page', { layout: 'dashboard' }));
router.get('/add-contact', requireAuth, (req, res) => res.render('contact-page', { layout: 'dashboard' }));
//new routes

module.exports = router;