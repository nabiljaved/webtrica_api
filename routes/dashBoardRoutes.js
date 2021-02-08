const { Router } = require('express');
const authController = require('../controllers/authController');
const { requireAuth, checkUser, protectedRoutes,redirectRoutes } = require('../middleware/authMiddleware');

const router = Router();









module.exports = router;