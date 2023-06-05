var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/authController');

// helpers
// const checkOut = require('../helpers/out').checkOut;

// GET
router.get('/', AuthController.login);
router.get('/logout', AuthController.logout);

// POST
router.post('/register', AuthController.registerPost);
router.post('/login', AuthController.loginPost);

module.exports = router;
