/**
 * Title: User management router
 * Description: User login, add, delete, edit management router
 * Author: Jagadish Chakma
 * Date: 12-06-2021
 * Version: 1.0.0
 */

// external modules
const express  = require('express');

// internal modules
const {getLogin} = require('../controllers/loginController');
const decorationHtml = require('../middlewares/decorateHtml');

// make router
const router = express.Router();

// get login 
router.get('/', decorationHtml('Login Page'), getLogin);

// router exports
module.exports = router;