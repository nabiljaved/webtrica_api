const { Router } = require('express');
const adminController = require('../controllers/adminControllers');
const { requireAuth, checkUser, protectedRoutes,redirectRoutes } = require('../middleware/authMiddleware');
var expressLayouts = require('express-ejs-layouts');

const router = Router();
router.use(expressLayouts);




router.get('/', (req, res) => res.render('statistics', {layout: 'dashboard'}));

router.get('/add-promotion', (req, res) => res.render('promotion-page', { layout: 'dashboard' }));
router.get('/add-package', (req, res) => res.render('package-page', { layout: 'dashboard' }));
router.get('/add-contact', (req, res) => res.render('contact-page', { layout: 'dashboard' }));

//post methods contact-us
router.post('/add-package', adminController.addPackages);
router.post('/add-promotion', adminController.addPromotion);
router.post('/add-contact', adminController.addContact);



module.exports = router;